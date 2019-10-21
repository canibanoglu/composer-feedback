import React, { Component } from 'react';
import { connect } from 'react-redux';
import EntityList from "./EntityList";
import {addFeedback} from "../actions/customerActions";
import {selectCustomerFeedback} from "../selectors/feedbackSelectors";
import styled from "styled-components";

const renderFeedbackItem = feedback => {
  return <span title={feedback.message}>{feedback.message}</span>
};

const StyledEntityList = styled(EntityList)`
  width: 50%;
`;


class FeedbackList extends Component {
  onCreateFeedback = message => {
    const { customerId, addFeedback } = this.props;
    addFeedback(customerId, message);
  };

  render() {
    const { feedbackItems } = this.props;
    return (
        <StyledEntityList title="Feedback"
                          items={feedbackItems}
                          onItemCreate={this.onCreateFeedback}
                          emptyMesage="This customer has no feedback"
                          noDataMessage="Please select a customer"
                          onItemClick={() => {}}
                          renderItem={renderFeedbackItem}/>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    feedbackItems: selectCustomerFeedback(state, ownProps.customerId),
  };
}

export default connect(mapStateToProps, {
  addFeedback,
})(FeedbackList);