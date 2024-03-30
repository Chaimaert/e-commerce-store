import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const HomeSectionCarosel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4.8 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((items) => (
    <HomeSectionCard />
  ));

  return (
    <div className="border ">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length-5 &&  <button
          onClick={slideNext}
          className="z-50 absolute top-1/2 -right-3.5 transform -translate-y-1/2"
          aria-label="next"
        >
          <KeyboardDoubleArrowLeftIcon sx={{ transform: "rotate(180deg)" }} />
        </button>}

        <button
          onClick={slidePrev}
          className="z-50 absolute top-1/2 -left-3 transform -translate-y-1/2"
          aria-label="previous"
        >
          <KeyboardDoubleArrowRightIcon sx={{ transform: "rotate(180deg)" }} />
        </button>
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
