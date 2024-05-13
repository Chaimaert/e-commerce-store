import { useMediaQuery, List, ListItem, ListItemButton, ListItemIcon, Toolbar, CssBaseline, Drawer,  ListItemText ,Box} from "@mui/material";
import { useState } from "react";
import { useNavigate ,Routes,Route } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import DashbordIcon from "@mui/icons-material/Dashboard";

import Dashboard from "./Dashboard";
import CreateProductsForm from "./CreateProductsForm";
import OrdersTable from "./OrdersTable";
import CustomersTable from "./CustomersTable";
import ProductsTable from "./ProductsTable";
import { useTheme } from "@mui/material";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashbordIcon /> },
  { name: "Products", path: "/admin/products", icon: <DashbordIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <DashbordIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <DashbordIcon /> },
  {name: "AddProduct",path: "/admin/creatproducts",icon: <DashbordIcon />},
 
];

const Admin = () => {
  const theme= useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate=useNavigate();


  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border:"1px solid blue ",
        height:"100%"
      }}
    >
 <>
       
       {/*{isLargeScreen && <Toolbar />}*/ }
      <List>
        {menu.map((item, index) => (
          <ListItem key={index} disablePadding onClick={() => navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              {item.name}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
</>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon/>

              </ListItemIcon>
              <ListItemText>
                Account
              </ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      
        <div className='flex h-[100vh]'>
           <CssBaseline />

          <div className='w-[15%] border border-r-gray-900 h-full'> 
          
            {drawer}
         </div>

          <div className='w-[90%] ml-4'>
            <Routes>
                <Route path='/' element={<Dashboard/>}></Route>
                
                <Route path='/products' element={<ProductsTable/>}></Route>
                <Route path='/orders' element={<OrdersTable/>}></Route>
                <Route path='/customers' element={<CustomersTable/>}></Route>
                <Route path='/creatproducts' element={<CreateProductsForm/>}></Route>
                
            </Routes>
          </div>
        </div>

    </div>
  );
};

export default Admin
