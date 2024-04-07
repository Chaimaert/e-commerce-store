import React from "react";
import CartItem from "./CartItem";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const Cart = () => {

  const navigate = useNavigate();

  const handleChekout = () => {
    navigate('/checkout?step=2')
  }
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative mt-7">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item) => (
            <CartItem key={item} />
          ))}
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
                <span>$49</span>
              </div>
              <div className="flex justify-between pt-3 text-black px-3">
                <span>Discount</span>
                <span className="text-green-600">$20</span>
              </div>
              <div className="flex justify-between pt-3 text-black px-3">
                <span>Delivry Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 text-black px-3">
                <strong className="text-lg font-bold">Total Amount</strong>
                <span className="text-lg font-bold">$29</span>
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
