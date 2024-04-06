import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";

const OrderCard = () => {
  return (
    <div className="p-5 shadow-lg hover:shadow-2xl border">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFIcgynnZ81UTjIP3DSPpOQtec-o6J7YDaKw&s"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p>Floral Top with Puff Sleeves</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>$50</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  style={{ color: "#7b2cbf" }}
                  className="mr-2 mb-0.5"
                />
                <span>Delivered on Mai 05</span>
              </p>
              <p className="text-xs ml-6">
              Your Item has been delivered
              </p>
            </div>
          )}

          {false && (
            <p>
              <span>Delivered on Mai 05</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
