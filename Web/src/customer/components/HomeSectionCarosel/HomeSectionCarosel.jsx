import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import men from "../../../Data/men";

const HomeSectionCarosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4.8 },
  };

  const handleOnSlideChanged = ({ item }) => {
    setCurrentIndex(item);
    setPrevDisabled(item === 0);
    setNextDisabled(item === men.length - 5);
  };

  const slidePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setNextDisabled(false);
    }
    if (currentIndex === 1) {
      setPrevDisabled(true);
    }
  };

  const slideNext = () => {
    if (currentIndex < men.length - 5) {
      setCurrentIndex(currentIndex + 1);
      setPrevDisabled(false);
    }
    if (currentIndex === men.length - 6) {
      setNextDisabled(true);
    }
  };

  const items = men
    .slice(currentIndex, currentIndex + 5)
    .map((item) => <HomeSectionCard key={item.title} product={item} />);

  return (
    <div className="border">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={handleOnSlideChanged}
          startIndex={currentIndex}
        />
        <button
          onClick={slidePrev}
          className={`absolute top-1/2 -left-3 transform -translate-y-1/2 ${
            prevDisabled ? " cursor-not-allowed" : ""
          }`}
          aria-label="previous"
          disabled={prevDisabled}
        >
          <KeyboardDoubleArrowLeftIcon sx={{ transform: "rotate(1deg)" }} />
        </button>
        
        <button
          onClick={slideNext}
          className={`absolute top-1/2 -right-3.5 transform -translate-y-1/2 ${
            nextDisabled ? " cursor-not-allowed" : ""
          }`}
          aria-label="next"
          disabled={nextDisabled}
        >
          <KeyboardDoubleArrowRightIcon sx={{ transform: "rotate(360deg)" }} />
        </button>
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
