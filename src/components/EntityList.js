import React, { Component } from 'react';
import styled from "styled-components";

// TODO - should click outside get out of add mode?

const Container = styled.div`
  color: white;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-weight: normal;
`;

const List = styled.ul`
  list-style-type: none;
  height: calc(100% - 5rem);
  margin: 0;
  padding: 0;
  text-align: left;
  border-right: 1px solid white;
`;

const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid white;
  display: flex;
  padding: 0 1rem;
  height: 5rem;
`;

const ListItem  = styled.li`
  background-color: ${props => props.highlighted ? 'darkgrey' : 'inherit' };
  border-bottom: 1px solid white;
  cursor: pointer;
  padding: 1rem;
`;

const AddNewButton = styled.button`
  margin-left: auto;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 0.5rem 2rem
`;

const TextContainer = styled.div`
  align-items: center;
  justify-content: center;
  height: 100%;
  display: flex;
`;

const Input = styled.input`
  color: white;
  width: 100%;
  background-color: transparent;
  border: none;
  
  &:focus {
    outline: none;
  }
`;

export default class EntityList extends Component {
  state = {
    adding: false,
    focusedIndex: null,
  };

  onAddButtonClick = () => {
    this.setState({ adding: true, focusedIndex: null }, () => {
      this.input.focus();
    });
  };

  handleKeydown = event => {
    console.log('here');
    if (event.key === 'Escape' && !this.state.adding) {
      this.setState({ focusedIndex: null}, () => {
        this.props.onItemClick(null);
      })
    }
  };

  handleInputKeydown = event => {
    if (event.key === 'Escape') {
      this.setState({ adding: false });
      return;
    }

    if (event.key === 'Enter') {
      this.props.onItemCreate(this.input.value);
      this.setState({ adding: false });
    }
  };

  handleItemClick = (item, index) => {
    const { onItemClick } = this.props;
    this.setState({ focusedIndex: index }, () => {
      onItemClick(item);
    });
  };

  renderListItem = (item, index) => {
    const { renderItem } = this.props;
    const { focusedIndex } = this.state;

    return (
        <ListItem key={index}
            highlighted={focusedIndex === index}
            onClick={() => this.handleItemClick(item, index)}>
          { renderItem(item) }
        </ListItem>
    );
  };

  renderNewItem = () => {
    return (
        <ListItem key="new-entity">
          <Input placeholder="New Customer" onKeyDown={this.handleInputKeydown} ref={(el) => { this.input = el; }} />
        </ListItem>
    );
  };

  renderNoData = () => {
    return <TextContainer><span>Please select a customer</span></TextContainer>
  };

  renderEmpty = () => {
    return <TextContainer><span>There are no items here</span></TextContainer>
  };

  renderAddButton = () => {
    if (!this.props.items) return null;
    return <AddNewButton onClick={this.onAddButtonClick}>Add New</AddNewButton>;
  };

  render() {
    const { items, title, className } = this.props;
    return (
        <Container className={className} onKeyDown={this.handleKeydown} tabIndex="0">
          <Header>
            <Title>{ title }</Title>
            { this.renderAddButton() }
          </Header>

          { !items && this.renderNoData() }
          { items && !this.state.adding && items.length === 0 && this.renderEmpty() }

          { items && items.length > 0 &&
            <List>
              {this.state.adding && this.renderNewItem()}
              {items && items.map(this.renderListItem)}
            </List>
          }
        </Container>
    );
  }
}
