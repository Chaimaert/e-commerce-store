import React from "react"; 
import MainCarosel from "../../components/HomeCarousel/MainCrosel";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
import men from "../../../Data/men";
import women from "../../../Data/women";
import children from "../../../Data/children";

const HomePage = () => {
  return (
    <div>
      <MainCarosel />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel data={men} sectionName={"Men"}/>
        <HomeSectionCarosel data={women} sectionName={"Women"}/>
        <HomeSectionCarosel data={children} sectionName={"Children"}/>
      </div>
    </div>
  );
};

export default HomePage;
