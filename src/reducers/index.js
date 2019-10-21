import customersReducer from "./customers";

import { combineReducers} from "redux";

export default combineReducers({
  customers: customersReducer,
});
