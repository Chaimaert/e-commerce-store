import React from "react";
import { Button } from "@mui/material";
import AdressCard from "../AdressCard/AdressCard";
import CartItem from "../Cart/CartItem";
const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AdressCard />
      </div>
      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {[1, 1, 1, 1].map((item) => (
              <CartItem key={item} />
            ))}
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
                  <span>490Dhs</span>
                </div>
                <div className="flex justify-between pt-3 text-black px-3">
                  <span>Discount</span>
                  <span className="text-green-600">200Dhs</span>
                </div>
                <div className="flex justify-between pt-3 text-black px-3">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 text-black px-3">
                  <strong className="text-lg font-bold">Total Amount</strong>
                  <span className="text-lg font-bold">290Dhs</span>
                </div>
              </div>
              <Button
                className=" text-lg font-bold"
                color="secondary"
                variant="contained"
                sx={{
                  px: "16.1rem",
                  py: "1rem",
                  bgcolor: "#ff99cc",
                  color: "#000",
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
