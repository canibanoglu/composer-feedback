export const selectAllCustomers = state => state.customers;

export const selectCustomerById = (state, customerId) => {
  return selectAllCustomers(state).find(x => x.id === customerId);
};
