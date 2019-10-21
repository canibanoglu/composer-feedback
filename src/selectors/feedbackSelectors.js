import {selectCustomerById} from "./customerSelectors";

export const selectCustomerFeedback = (state, customerId) => {
  const customer = selectCustomerById(state, customerId);

  return customer ? customer.feedback : null;
};
