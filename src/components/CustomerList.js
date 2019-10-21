import React, { Component } from 'react';
import { connect } from 'react-redux';
import EntityList from "./EntityList";
import {addCustomer} from "../actions/customerActions";
import styled from 'styled-components';

const StyledEntityList = styled(EntityList)`
  width: 50%;
`;

const renderCustomer = customer => {
  return <span title={customer.name}>{customer.name}</span>;
};

class CustomerList extends Component {
  render() {
    const { customers, addCustomer, onSelectCustomer } = this.props;
    return (
        <StyledEntityList title="Customers"
                          emptyMesage="There are no customers"
                          items={customers}
                          onItemCreate={addCustomer}
                          onItemClick={onSelectCustomer}
                          renderItem={renderCustomer} />
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  addCustomer,
})(CustomerList);