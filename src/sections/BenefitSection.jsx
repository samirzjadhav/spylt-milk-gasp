import React from "react";
import ClipPathTitle from "../components/ClipPathTitle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const BenefitSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
        markers: true,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        ease: "circ.out",
      });
  });
  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Unlock the Advantages: <br />
            Explore the key Benefits of Choosing SPYLT
          </p>

          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"Shelf stable"}
              color={"#faeade"}
              bg={"#c88e64"}
              borderColor={"#222123"}
              className={"first-title"}
            />
            <ClipPathTitle
              title={"Protein + Caffeine"}
              color={"#222123"}
              bg={"#faeade"}
              borderColor={"#222123"}
              className={"second-title"}
            />
            <ClipPathTitle
              title={"Infinitely recyclable"}
              color={"#faeade"}
              bg={"#7F3B2D"}
              borderColor={"#222123"}
              className={"third-title"}
            />
            <ClipPathTitle
              title={"loctose free"}
              color={"#2e2d2f"}
              bg={"#Fed775"}
              borderColor={"#222123"}
              className={"fourth-title"}
            />
          </div>
          <div className="md:mt-0 mt-10">
            <p>And much more ... </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
