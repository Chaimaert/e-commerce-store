import { Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className=" footer  text-black text-center mt-10"
        container
        sx={{ color: "black", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <button className="pb-5" variant="h6" gutterBottom>
              {" "}
              About{" "}
            </button>
          </div>
          <div>
            <button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Blog{" "}
            </button>
          </div>
          <div>
            <button className="pb-5" variant="h6" gutterBottom>
              {" "}
              press{" "}
            </button>
          </div>
          <div>
            <button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Jobs{" "}
            </button>
          </div>
          <div>
            <button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Partners{" "}
            </button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Marketing{" "}
            </button>
          </div>
          <div>
            <button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Analytics{" "}
            </button>
          </div>
          <div>
            <button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Commerce{" "}
            </button>
          </div>
          <div>
            <button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Insights{" "}
            </button>
          </div>
          <div>
            <button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Support{" "}
            </button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Guides{" "}
            </button>
          </div>
          <div>
            <button className="pb-5" variant="h6" gutterBottom>
              {" "}
              API Status{" "}
            </button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Claim{" "}
            </button>
          </div>
          <div>
            <button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Privacy{" "}
            </button>
          </div>
          <div>
            <button className="pb-5" variant="h6" gutterBottom>
              {" "}
              Terms{" "}
            </button>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 Glamify
          </Typography>
          <Typography variant="body2" component="p" align="center">
          All rights reserved
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
