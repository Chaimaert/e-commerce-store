import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const HomeSectionCarosel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1].map((items) => <HomeSectionCard />);

  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5">
        <AliceCarousel />
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          infinite
        />
        <button
          className="z-50 absolute top-1/2 -right-4 transform -translate-y-1/2"
          aria-label="next"
        >
          <KeyboardDoubleArrowLeftIcon sx={{transform:"rotate(180deg)"}} />
        </button>
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
