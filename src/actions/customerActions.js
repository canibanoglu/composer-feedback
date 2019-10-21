export const addCustomer = name => {
  console.log('add customer', name);
  return {
    type: 'ADD_CUSTOMER',
    name,
  };
};

export const addFeedback = (customerId, message) => {
  console.log('add feedback', customerId, message);
  return {
    type: 'ADD_FEEDBACK',
    customerId,
    message,
  };
};
