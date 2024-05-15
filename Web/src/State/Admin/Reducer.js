
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
    PLACED_ORDERS_REQUEST,
    PLACED_ORDERS_SUCCESS,
    PLACED_ORDERS_FAILURE,
} from "./Order/ActionType";

const initialState = {
    orders: [],
    loading: false,
    error: "",
};

const adminOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
              
            };
            case GET_ORDERS_SUCCESS:
            return {
                loading: false,
                orders: action.payload,
                error: "",
            };
        case GET_ORDERS_FAILURE:
            return {
                loading: false,
                orders:[],
                error:action.payload,
            };
        case CONFIRMED_ORDERS_REQUEST:
        case PLACED_ORDERS_REQUEST:
        case DELEVERED_ORDERS_REQUEST:
    
            return {
                ...state,
                isloading: true,
                /*orders: state.orders.map(order => order.id === action.payload.id ? action.payload : order),
            */ };
    
        case CONFIRMED_ORDERS_SUCCESS:
            return {
                ...state,
                confirmed : action.payload,
                isloading: false,
                
            };
        case PLACED_ORDERS_SUCCESS:  
        return {
            ...state,
            placed : action.payload,
            isloading: false,
        };
        case DELEVERED_ORDERS_SUCCESS:  
        return {
            ...state,
           delivred: action.payload,
            isloading: false,
        };
      
        case CONFIRMED_ORDERS_FAILURE:
        case PLACED_ORDERS_FAILURE:
        case DELEVERED_ORDERS_FAILURE:
     
            return {
                ...state,
                error : action.payload,
                isloading: false,
            };
        case DELETE_ORDERS_REQUEST:
            return{ ...state,
                loading: true, }
        case DELETE_ORDERS_FAILURE:
            return {
            ...state,
            loading: false,
            error : action.payload,
        };
        case DELETE_ORDERS_SUCCESS:
            return {
                ...state,loading: false,deletedOrder:action.playoad
            };
            case SHIP_ORDERS_REQUEST:
                return {
                ...state,
                isloading: true,
                error : null,
            }; 
            case SHIP_ORDERS_SUCCESS:
                return {
                ...state,
                isloading: false,
                shipped : action.playoad,
            };
            case SHIP_ORDERS_FAILURE:
                return {
                ...state,
                isloading: false,
                error : action.payload,
            };           
        default:
            return state;
    }
};

export default adminOrderReducer
