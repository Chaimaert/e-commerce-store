import { Grid } from "@mui/material";
import React  from "react";
import Achivement from "./Achivement";
import MonthlyOverViews from "./MonthlyOverViews";
const Dashboard = () => {
    return (
        <div className='px-9'>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4 }>

                <Achivement/> 

            </Grid>
            <Grid item xs={12} md={8} >
                <MonthlyOverViews/>
            </Grid>
            <Grid item xs={12} md={6}>

            </Grid>

        </Grid>    
         </div>
    )
}
export default Dashboard