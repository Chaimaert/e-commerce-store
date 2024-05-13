
import { api } from "../../../config/apiConfig";

import { 
    CONFIRMED_ORDERS_FAILURE,
    CONFIRMED_ORDERS_REQUEST,
    CONFIRMED_ORDERS_SUCCESS,
    DELEVERED_ORDERS_REQUEST,
    DELEVERED_ORDERS_SUCCESS,
    DELEVERED_ORDERS_FAILURE,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAILURE,
    DELETE_ORDERS_REQUEST,
    DELETE_ORDERS_SUCCESS,
    DELETE_ORDERS_FAILURE,
    SHIP_ORDERS_REQUEST,
    SHIP_ORDERS_SUCCESS,
    SHIP_ORDERS_FAILURE,
    GET_ORDERS_REQUEST,
} from "./ActionType";

export const getOrders = () => {
    console.log("get all order ",);
    return async (dispatch) => {
        dispatch({ type: GET_ORDERS_REQUEST });
        try {
            const response = await api.get(`/api/admin/orders/`);
            console.log("get all orders ", response.data);
            dispatch({ type: GET_ORDERS_SUCCESS, payload: response.data });
        } catch (error) {
            console.log("catch error ", error);
            dispatch({ type: GET_ORDERS_FAILURE, payload: error.message });
        }
    };
};

export const confirmOrder = (orderId) => async (dispatch) => {
    dispatch({ type: CONFIRMED_ORDERS_REQUEST });
    try {
        const response = await api.put(`/api/admin/orders/${orderId}/confirmed`);
        const data = response.data;
        console.log("confirm_order", data);
        dispatch({ type: CONFIRMED_ORDERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CONFIRMED_ORDERS_FAILURE, payload: error.message });
    }
};

export const shipOrder = (orderId) => async (dispatch) => {
    dispatch({ type: SHIP_ORDERS_REQUEST });
    try {
        const { data } = await api.put(`/api/admin/orders/${orderId}/ship`);
        console.log("shiped_order", data);
        dispatch({ type: SHIP_ORDERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: SHIP_ORDERS_FAILURE, payload: error.message });
    }
};

export const deliverdOrder = (orderId) => async (dispatch) => {
    dispatch({ type: DELEVERED_ORDERS_REQUEST });
    try {
        const response = await api.put(`/api/admin/orders/${orderId}/deliver`);
        const data = response.data;
        console.log("dilivered_order", data);
        dispatch({ type: DELEVERED_ORDERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DELEVERED_ORDERS_FAILURE, payload: error.message });
    }
};

export const deleteOrder = (orderId) => async (dispatch) => {
    dispatch({ type: DELETE_ORDERS_REQUEST });
    try {
        const response = await api.put(`/api/admin/orders/${orderId}/delete`);
        const data = response.data;
        console.log("delete_order", data);
        dispatch({ type: DELETE_ORDERS_SUCCESS, payload: data });
    } catch (error) {
        console.log("catch error", error);
        dispatch({ type: DELETE_ORDERS_FAILURE, payload: error.message });
    }
};
