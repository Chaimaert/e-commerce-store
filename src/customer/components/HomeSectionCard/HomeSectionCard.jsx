import React from "react";

const HomeSectionCard = () => {
  return (
    <div
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg sahdow-lg 
        overflow-hidden w-[15rem] mx-3 border"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://arcinaori.com.au/cdn/shop/files/IMG_6310.jpg?v=1709701734&width=1280"
          alt=""
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">Blacky</h3>
        <p className="mt-2 tesxt-sm text-gray-500">Women black dress</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
