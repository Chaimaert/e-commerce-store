import React from "react";
import {
  Grid,
  Box,
  Avatar,
  IconButton,
  Typography,
  Card,
  CardContent,
  CardHeader
} from "@mui/material";
import SettingsCellIcon from "@mui/icons-material/SettingsCell";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTheme } from "@mui/material/"; // Importer useTheme
import TrendingUp from "@mui/icons-material/TrendingUp";
import AccountCircle from "@mui/icons-material/AccountCircle";
const salesData = [
  {
    states: "245K",
    titles: "Sales",
    color: "primary",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />
  },
  {
    states: "12.5K",
    titles: "Customers",
    color: "Success",
    icon: <AccountCircle sx={{ fontSize: "1.75rem" }} />
  },
  {
    states: "1.55K",
    titles: "Products",
    color: "Warning",
    icon: <SettingsCellIcon sx={{ fontSize: "1.75rem" }} />
  },
  {
    states: "88K",
    titles: "Revenue",
    color: "Info",
    icon: <AttachMoneyIcon sx={{ fontSize: "1.75rem" }} />
  }
];

const renderStats = () => {
  

  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: "common.white",
            background:'green'       
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="caption">{item.titles}</Typography>
          <Typography variant="h6">{item.states}</Typography>
        </Box>
      </Box>
    </Grid>
  ));
};

const MonthlyOverViews = () => {
  const theme = useTheme(); 

  return (
    <Card sx={{bgcolor:"#FFC0CB",color:"black"}}>
      <CardHeader
        title="Monthly Overview"
        action={
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box component="span" sx={{ fontWeight: 600,mx:2}}>
              Total 48.5% growth
            </Box>
            this Month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: ".15px !important"
          }
        }}
      />
      <CardContent sx={{ pt: `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MonthlyOverViews;
