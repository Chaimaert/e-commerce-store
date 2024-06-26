import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from 'redux-thunk'; 


import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import adminOrderReducer from "./Admin/Reducer";


const rootReducers = combineReducers({
    auth: authReducer,
    products: customerProductReducer,
    cart: cartReducer,
    order: orderReducer,
    adminOrder: adminOrderReducer
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
