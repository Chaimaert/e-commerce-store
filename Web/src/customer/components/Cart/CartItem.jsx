import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { IconButton } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from "@mui/base";
const CartItem = () => {
    return (
        <div className="p-5 shadow-lg border rounded-nd ">
            <div className="flex items-center ">

                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img className="w-full h-full object-cover objetct-top" src="https://img.freepik.com/photos-gratuite/jeune-homme-boucle-assis-chaise-studio-isole-mur-blanc_231208-1181.jpg?t=st=1711620782~exp=1711624382~hmac=76771dd08cbe154feeab5d2a9efd51458eb537bb6874839aef2b8afaa9690a42&w=360 " atl="" />
                </div>

                <div className="ml-5 space-y-1 ">

                    <p className="font-semibold"> Men Slim Mid Rise Black Jeans</p>
                    <p className="opacity-70"> Size: L,White</p>
                    <p className="opacity-70 mt-2">Sellar: Crishtaliyo Zfashion </p>

                    <div className="flex space-x-5 items-center text-gray-900 pt-6">
                        <p className='font-semibold'>199Dhs</p>
                        <p className='opacity-50 line-through'>211Dhs</p>
                        <p className='text-green-600 font-semibold'>5% Off</p>
                    </div>
                </div>
            </div>
            <div className="lg:flex items-cennter lg:space-x-10 pt-4">
                <div className="flex items-center space-x-2">
                    <IconButton  >
                        <RemoveCircleOutlineIcon/>
                    </IconButton>
                    <span className="py-1 px-7 border rounded-sm">3</span>
                        <IconButton sx={{color:"RGB(145 85 253)"}}>
                            <AddCircleIcon/>
                        </IconButton>
                        <Button className="font-semibold" sx={{color:"RGB(255, 128, 0, 1)"}} >Remove</Button>
                </div>

                

            </div>

        </div>


    )
}
export default CartItem 