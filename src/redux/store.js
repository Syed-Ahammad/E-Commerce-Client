import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk';
import cartCounter from "./middleWares/cartCounters";
import logger from 'redux-logger';


const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(cartCounter, thunk, logger))) ;

export default store;
