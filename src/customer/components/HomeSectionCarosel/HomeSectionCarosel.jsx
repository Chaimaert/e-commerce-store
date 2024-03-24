import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

const HomeSectionCarosel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 4 },
  };

  const items = [1, 1, 1, 1, 1].map((items) => <HomeSectionCard />);

  return (
    <div>
      <AliceCarousel
        items={items}
        responsive={responsive}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
    </div>
  );
};

export default HomeSectionCarosel;
