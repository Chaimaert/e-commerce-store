import React from "react";
import { Button } from "@mui/material";
import AdressCard from "../AdressCard/AdressCard";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation } from "react-router-dom";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector(store => store);
  const serachParams = new URLSearchParams(location.serachParams);
  const orderId = serachParams.get("order_id");

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AdressCard address={order.orders?.shippingAddress} />
      </div>
      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {/* {[1, 1, 1, 1].map((item) => (
              <CartItem key={item} />
            ))} */}
            {order.orders?.orderItems.map((item) => (
              <CartItem key={item} />
            )) }
          </div>
          <div className="px-5 p-5 sticky top-0 h-[100vh] mt-10 lg:mt-0">
            <div className="border">
              <p className="uppercase font-bold opacity-60 pb-4 px-2">
                {" "}
                Price details
              </p>
              <hr />
              <div className="space-y-3 font-semibold mb-10 px-3">
                <div className="flex justify-between pt-3 text-black px-3">
                  <span>Price</span>
                  <span>${order.orders?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 text-black px-3">
                  <span>Discount</span>
                  <span className="text-green-600">${order.orders?.discount}</span>
                </div>
                <div className="flex justify-between pt-3 text-black px-3">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 text-black px-3">
                  <strong className="text-lg font-bold">Total Amount</strong>
                  <span className="text-lg font-bold">${order.orders?.totalDiscountedPrice}</span>
                </div>
              </div>
              <Button
                className=" text-lg font-bold"
                color="secondary"
                variant="contained"
                sx={{
                  px: "8.6rem",
                  py: "1rem",
                  bgcolor: "#ffb3c6",
                  color: "#000",
                  fontSize: "14px",
                  borderRadius: "8px",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                  "&:hover": {
                    bgcolor: "#e066a3",
                    color: "#fff",
                  },
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
