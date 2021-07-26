import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Basket from "./BasketReducer";



const rootReducers = combineReducers({
    Basket: Basket
})

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store;