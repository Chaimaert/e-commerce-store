import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const HomeSectionCarosel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1].map((items) => <HomeSectionCard />);

  return (
    <div className="px-4 lg:px-8 border">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
        />
        <button
          className="z-50 absolute top-1/2 -right-3 transform -translate-y-1/2"
          aria-label="next"
        >
          <KeyboardDoubleArrowLeftIcon sx={{ transform: "rotate(180deg)" }} />
        </button>

        <button
                    className="z-50 absolute top-1/2 left-1 transform -translate-y-1/2"
                    aria-label="previous"
        >
          <KeyboardDoubleArrowRightIcon sx={{ transform: "rotate(180deg)" }} />
        </button>
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
