import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import AuthReducer from "./reducers/AuthReducer";


const roorReducer = combineReducers({
     AuthReducer
})

const middleware = [thunkMiddleware]
const Store = createStore(roorReducer,applyMiddleware(...middleware))

export default Store;