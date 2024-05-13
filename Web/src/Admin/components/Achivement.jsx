import { CardContent, styled,Typography,Card ,Button } from "@mui/material";
import React from "react";

const TrignleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});
const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});

const Achivement = () => {
  return (
<Card ClassName=' ' sx={{position:"relative", bgcolor:"#FFC0CB"}}>
    <CardContent>
        <Typography variant='h6' sx={{letterSpacing:" .25px"}}>
        Shop with as 
        </Typography>
        <Typography variant='body2' sx={{my:3.1}}> Congratulation </Typography>
        <Typography  variant='h5' sx={{my:3.1}}>420.8K</Typography>   

        <Button size='small' variant='container'   sx={{ bgcolor: '#1e88e5', color: 'white' }}> View Sales</Button> 
        <Typography src=''></Typography>
         <Typography src='https://as1.ftcdn.net/v2/jpg/02/84/67/02/1000_F_284670286_VB4EEnS01sbqlueiFka9BO3S5bEFhnx2.jpg'></Typography>
    </CardContent>
</Card>
  );
   
};
export default Achivement;
