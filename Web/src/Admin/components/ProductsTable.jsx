import React, { useEffect }  from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux";
import { findProducts,deleteProduct} from "../../State/Product/Action";
import men from "../../Data/men";
import { Avatar, Card, CardHeader, withTheme } from "@mui/material";
import { Button } from "@mui/base";

const ProductsTable = () => {
const dispatch=useDispatch();
const {products}=useSelector(store=>store);
console.log("products ----",products)

const handleProductDelete=(productId)=>(
    dispatch(deleteProduct(productId))
)

useEffect(()=>{
        const data = {
            category:men,
            colors: [],
            sizes: [],
            minPrice: 0,
            maxPrice: 1000000000,
            minDiscount: 0,
            sort:  "price_low",
            pageNumber: 0,
            pageSize: 10,
            stock: "",
          };
      
          dispatch(findProducts(data))
    },[products.deletedProduct])

    return (
        <div className="p-5 bg-[#FFC0CB] text-black">
<Card className='mt-2'>
    <CardHeader title="All Product" sx={{bgcolor:'#FFFFFF'}}/>
</Card>

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.products?.content?.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">
                <Avatar src={item.imageUrl}></Avatar>
              </TableCell>

              <TableCell align="right" scope="row">
                {item.title}
              </TableCell>
              
              <TableCell align="right">{item.category.name}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
              <TableCell align="right">
                <Button onClick={()=>handleProductDelete(item.id)} variant='outlined'>
                  Delete
                </Button>
                </TableCell>
          </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}
export default ProductsTable