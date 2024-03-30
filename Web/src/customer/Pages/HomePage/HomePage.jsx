import React from "react"; 
import MainCarosel from "../../components/HomeCarousel/MainCrosel";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
import men from "../../../Data/men";

const HomePage = () => {
  return (
    <div>
      <MainCarosel />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel data={men} sectionName={"Men"}/>
        <HomeSectionCarosel data={men} sectionName={"Women"}/>
        <HomeSectionCarosel data={men} sectionName={"Accessories"}/>
        <HomeSectionCarosel data={men} sectionName={"Children"}/>
        <HomeSectionCarosel data={men} sectionName={"kitchen"}/>
      </div>
    </div>
  );
};

export default HomePage;
