import React from "react";
import FlovorTitle from "../components/FlavorTitle";
import FlovorSlider from "../components/FlavorSlider";

const FlovorSection = () => {
  return (
    <section className="flavor-section">
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
          <FlovorTitle />
        </div>
        <div className="h-full ">
          <FlovorSlider />
        </div>
      </div>
    </section>
  );
};

export default FlovorSection;
