import { useGSAP } from "@gsap/react";
import React from "react";
import SplitText from "gsap/SplitText";
import gsap from "gsap";

const FlovorTitle = () => {
  useGSAP(() => {
    const firstTextsplit = SplitText.create(".first-text-split h1", {
      type: "chars",
    });
    const SecondTextsplit = SplitText.create(".second-text-split h1", {
      type: "chars",
    });
    gsap.from(firstTextsplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });
    gsap.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 10%",
      },
    });

    gsap.from(SecondTextsplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 1%",
      },
    });
  });
  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1>We have 6</h1>
      </div>
      <div
        className="flavor-text-scroll"
        style={{
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        }}
      >
        <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
          <h2 className="text-milk">freaking</h2>
        </div>
      </div>
      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>Delicious Flavors</h1>
      </div>
    </div>
  );
};

export default FlovorTitle;
