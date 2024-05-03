import React from "react";
import { useEffect } from "react";
import CartItem from "./CartItem";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";
const Cart = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const  { cart } = useSelector(store => store);

  const handleChekout = () => {
    navigate('/checkout?step=2')
  }

  useEffect(() => {
    dispatch(getCart());
  }, [])


  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative mt-7">
        <div className="col-span-2">
          {/* {[1, 1, 1, 1].map((item) => (
            <CartItem key={item} />
          ))} */}
          {cart.cart?.cartItems.map((item) => <CartItem item={item} />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4 px-2">
              {" "}
              Price details
            </p>
            <hr />
            <div className="space-y-3 font-semibold mb-12">
              <div className="flex justify-between pt-3 text-black px-3">
                <span>Price</span>
                <span>${cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black px-3">
                <span>Discount</span>
                <span className="text-green-600">${cart.cart?.discount}</span>
              </div>
              <div className="flex justify-between pt-3 text-black px-3">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 text-black px-3">
                <strong className="text-lg font-bold">Total Amount</strong>
                <span className="text-lg font-bold">${cart.cart?.totalDiscountedPrice}</span>
              </div>
            </div>
            <Button
              onClick={handleChekout}
              className="text-lg font-bold"
              color="secondary"
              variant="contained"
              sx={{
                px: "8.85rem",
                py: "1rem",
                bgcolor: "#ff66cc",
                color: "#000",
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
