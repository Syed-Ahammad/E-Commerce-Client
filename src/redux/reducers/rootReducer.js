import { combineReducers } from "redux";
import { filterReducer } from "./filterRuducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    products: productReducer,
    filter: filterReducer

});

export default rootReducer;
