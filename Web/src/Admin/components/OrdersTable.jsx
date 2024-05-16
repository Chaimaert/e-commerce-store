import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  deleteOrder,
  deliverdOrder,
  getOrders,
  shipOrder,
} from "../../State/Admin/Order/Action";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/TableRow";
import { Avatar, AvatarGroup, Card, CardHeader } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/base";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const OrdersTable = () => {
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
 
  const handleClick = (event,index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget
    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index) => {
    const newAnchorElArray=[...anchorEl];
    newAnchorElArray[index]=null
    setAnchorEl(newAnchorElArray);
  };
  const dispatch = useDispatch();

  const { adminOrder } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getOrders());
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered,adminOrder.deletedOrde]);

  console.log("admin orders", adminOrder);

  const handleShipedOrder = (orderId) => {
    dispatch(shipOrder(orderId));
    console.log("handle shipped Order",orderId)
    handleClose();
  };

  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder());
    console.log("handle confirmed Order",orderId)
    handleClose();
  };

  const handleDelivredOrder = (orderId) => {
    dispatch(deliverdOrder());
    console.log("handle delivred Order",orderId)
    handleClose();
  };

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder());
    
    handleClose();
  };
  return (
    <div className="p-10 bg-[#FFC0CB] text-black">
      <Card className="mt-2">
        <CardHeader title="All Product" sx={{ bgcolor: "#FFFFFF" }} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontSize: "1.2rem", padding: "1rem" }}>
                  Image
                </TableCell>
                <TableCell align="right" style={{ fontSize: "1.2rem" }}>
                  Title
                </TableCell>
                <TableCell align="right" style={{ fontSize: "1.2rem" }}>
                  Id
                </TableCell>
                <TableCell align="right" style={{ fontSize: "1.2rem" }}>
                  Price
                </TableCell>
                <TableCell align="right" style={{ fontSize: "1.2rem" }}>
                  Status
                </TableCell>
                <TableCell align="right" style={{ fontSize: "1.2rem" }}>
                  Update
                </TableCell>
                <TableCell align="right" style={{ fontSize: "1.2rem" }}>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.map((item,index) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <AvatarGroup max={3} xs={{ justifyContext: "start" }}>
                      {item.orderItem.map((orderItem) => (
                        <Avatar src={orderItem.product.imageUrl}></Avatar>
                      ))}
                    </AvatarGroup>
                    <Avatar src={item.imageUrl}></Avatar>
                  </TableCell>

                  <TableCell align="right" scope="row">
                    {item.orderItem.map((orderItem) => (
                      <p>{orderItem.product.title}</p>
                    ))}
                    {/*{item.title}*/}
                  </TableCell>

                  {/*<TableCell align="right">{item.category.name}</TableCell>*/}
                  <TableCell align="right">{item.id}</TableCell>
                  <TableCell align="right">{item.TotalPrice}</TableCell>
                  <TableCell align="right">
                    {" "}
                    <span
                      className={`text-White px-5 py-rounded-full
              ${
                item.OrderStatus === "CONFIRMMED"
                  ? "bg=[green]"
                  : item.orderStatus === "SHIPPED"
                  ? "bg-[blue]"
                  : item.orderStatus === "PLACED"
                  ? "bg-[#02B290]"
                  : item.orderStatus === "PENDING"
                  ? "bg-[gray]"
                  : "bg-[red]"
              }`}
                    >
                      {" "}
                      {item.OrderStatus}
                    </span>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => handleDeleteOrder(item.id)}
                      variant="outlined"
                     
                    >
                      Delete
                    </Button>
                  </TableCell>

                  <TableCell align="right">
                    <Button
                      id="basic-button"
                      
                      aria-haspopup="true"
                      onClick={(event)=>handleClick(event,index)}
                      aria-controls={`basic-menu-${item.id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                    >
                      STATUS
                    </Button>
                    <Menu
                      id={`basic-menu-${item.id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={()=> handleClose(index)}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={() => handleConfirmedOrder(item.id)}>
                        Confirmed Order
                      </MenuItem>
                      <MenuItem onClick={() => handleShipedOrder(item.id)}>
                        Ship Order
                      </MenuItem>
                      <MenuItem onClick={() => handleDelivredOrder(item.id)}>
                        Delivered Order
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrdersTable;
