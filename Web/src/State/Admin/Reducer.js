import {
    GET_ORDERS_REQUEST,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAILURE,
    CONFIRMED_ORDERS_REQUEST,
    CONFIRMED_ORDERS_SUCCESS,
    CONFIRMED_ORDERS_FAILURE,
    SHIP_ORDERS_REQUEST,
    SHIP_ORDERS_SUCCESS,
    SHIP_ORDERS_FAILURE,
    DELEVERED_ORDERS_REQUEST,
    DELEVERED_ORDERS_SUCCESS,
    DELEVERED_ORDERS_FAILURE,
    DELETE_ORDERS_REQUEST,
    DELETE_ORDERS_SUCCESS,
    DELETE_ORDERS_FAILURE,
} from "./Order/ActionType";

const initialState = {
    orders: [],
    loading: false,
    error: null,
};

const adminOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS_REQUEST:
        case CONFIRMED_ORDERS_REQUEST:
        case SHIP_ORDERS_REQUEST:
        case DELEVERED_ORDERS_REQUEST:
        case DELETE_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload,
            };
        case CONFIRMED_ORDERS_SUCCESS:
        case SHIP_ORDERS_SUCCESS:
        case DELEVERED_ORDERS_SUCCESS:
        case DELETE_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: state.orders.map(order => order.id === action.payload.id ? action.payload : order),
            };
        case GET_ORDERS_FAILURE:
        case CONFIRMED_ORDERS_FAILURE:
        case SHIP_ORDERS_FAILURE:
        case DELEVERED_ORDERS_FAILURE:
        case DELETE_ORDERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default adminOrderReducer
