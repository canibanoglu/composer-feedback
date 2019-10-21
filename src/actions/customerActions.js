export const addCustomer = name => {
  return {
    type: 'ADD_CUSTOMER',
    name,
  };
};

export const addFeedback = (customerId, message) => {
  return {
    type: 'ADD_FEEDBACK',
    customerId,
    message,
  };
};
