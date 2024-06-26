import { CREATE_ORDER_FAILURE } from "../Order/ActionType";
import { CREATE_PAYMENT_REQUEST } from "./ActionType"

export const createPayment=(oredrId)=>async(dispatch)=>{

    dispatch({type:CREATE_PAYMENT_REQUEST})
    try{
        const {data}=await api.post('/api/payments/${reqData.orderId}',reqData);

        if(data.payment_link_url){
            window.location.href=data.payment_link_url;
        }

    } catch (error) {
        dispatch({type:CREATE_PAYMENT_FAILURE,payload:error.message})

    }
};

export const updatePayment=(reqData)=>async(dispatch)=>{

    dispatch({type:UPDATE_PAYMENT_REQUEST});

    try{
        const {data}=await api.get('/api/payments?payment_id=${reqData.orderId}&order_id=${reqData.orderId}'
        );

      console.log("update payment : - ", data)

    } catch (error) {
        dispatch({type:CREATE_ORDER_FAILURE,payload:error.message})

    }
}