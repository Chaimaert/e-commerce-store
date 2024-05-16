import { Grid } from "@mui/material";
import React from "react";
import Achivement from "./Achivement";
import MonthlyOverViews from "./MonthlyOverViews";
import OrderTable from "../view/OrderTableView";
import ProductsTableView from "../view/ProductTableView";
const Dashboard = () => {
  return (
    <div style={{ paddingRight: "1rem", paddingTop: "1rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className="shadow-lg shadow-gray-600">
            <Achivement />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="shadow-lg shadow-gray-600">
            <MonthlyOverViews />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-600">
            <OrderTable />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-600">
            <ProductsTableView/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Dashboard;
