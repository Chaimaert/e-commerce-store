import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from 'redux-thunk'; // Import thunk directly

// Import your reducers
import { authReducer } from "./Auth/Reducer";

const rootReducers = combineReducers({
    auth: authReducer
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
