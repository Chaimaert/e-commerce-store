import React from "react";
import MainCarosel from "../../components/HomeCarousel/MainCrosel";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";

const HomePage = () => {
  return (
    <div>
      <MainCarosel />

      <div>
        <HomeSectionCarosel />
      </div>
    </div>
  );
};

export default HomePage;
