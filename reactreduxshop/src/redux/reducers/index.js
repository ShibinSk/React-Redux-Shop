import { combineReducers } from "redux";
import { productReducer,selectproductReducer } from "./productResucer";

const reducer = combineReducers({
  allProducts: productReducer,
  product:selectproductReducer
});

export default reducer
