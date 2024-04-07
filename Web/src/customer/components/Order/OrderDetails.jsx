import React from "react";
import AdressCard from "../AdressCard/AdressCard";
import OrderTracker from "./OrderTracker";
import { Grid, Box } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold py-6" style={{ color: "#cdb4db" }}>
          Delivery Address
        </h1>
        <AdressCard />
      </div>

      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid className="space-y-5" container>
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">
                    Women Blue Solid Cutout crop Tops
                  </p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    {" "}
                    <span>Color: blue</span> <span>Size : S</span>
                  </p>
                  <p>Seller: Aahwan</p>
                  <p>$25</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: "#7b2cbf" }}>
                <StarBorderIcon sx={{ fontsize: "2rem" }} className="px-1" />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
