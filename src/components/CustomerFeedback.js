import React, { Component } from 'react';
import styled from 'styled-components';
import CustomerList from "./CustomerList";
import FeedbackList from "./FeedbackList";

const Content = styled.div`
  display: flex;
  height: calc(100% - 4rem);
`;

const Container = styled.div`
  border: 1px solid white;
  width: 50%;
  height: 57rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  line-height: 2rem;
  margin: 0;
  padding: 1rem;
  text-align: left;
`;

export default class CustomerFeedback extends Component {
  state = {
    selectedCustomerId: null,
  };

  selectCustomer = customer => {
    this.setState({
      selectedCustomerId: customer ? customer.id : null,
    });
  };

  render() {
    return (
        <Container>
          <Title>Customer Feedback</Title>
          <Content>
            <CustomerList onSelectCustomer={this.selectCustomer}/>
            <FeedbackList customerId={this.state.selectedCustomerId} />
          </Content>
        </Container>
    )
  }
}