"use client";

import React, { useRef } from "react";

import Content from "./content/content";
import Description from "./description/description";
import FFP from "./ffp/ffp";
import InTheBox from "./in the box/in the box";
import Swipers from "./swiper/swipers";
import TechSpecs from "./tech specs/tech specs";
import YoutubePlayBtn from "./youtube play btn/youtube play btn";
import Features from "../component/spac/features";
import Elevate from "./Elevate/elevate";
import ProductSupport from "./productSupport/productSupport";
import NeedSupport from "../component/needSupport/needSupport";

export default function Product() {
  const scrollRef = useRef([]);

  const handleScrollView = (event) => {
    const name = event.target.innerText;
    const category = {
      Feature: 0,
      Tech: 1,
      Support: 2,
    };
    scrollRef.current[category[name]].scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Swipers />
      {/* <Content /> */}
      <Description />
      <div className="p-5 pr-0">
        <div
          onClick={handleScrollView}
          className="flex justify-around text-center"
        >
          <span className="text-center font-light hover:text-black text-gray-600 text-sm hover:after:content-'' hover:after:w-28 hover:after:h-0.5 hover:after:bg-black hover:after:absolute hover:after:mt-4 hover:after:block">
            Feature
          </span>
          <div className="text-center font-light hover:text-black text-gray-600 text-sm hover:after:content-'' hover:after:w-24 hover:after:h-0.5 hover:after:bg-black hover:after:absolute hover:after:mt-[1.1rem] hover:after:block">
            <span>Tech</span>
            <div>Specs</div>
          </div>
          <span className="text-center font-light hover:text-black text-gray-600 text-sm hover:after:content-'' hover:after:w-28 hover:after:h-0.5 hover:after:bg-black hover:after:absolute hover:after:mt-4 hover:after:block">
            Support
          </span>
        </div>
      </div>
      <div>
        <YoutubePlayBtn />
        <FFP />
        <div ref={(el) => (scrollRef.current[0] = el)}></div>
        <Features />
        <div ref={(el) => (scrollRef.current[1] = el)}></div>
        <TechSpecs />
        <InTheBox />
        <Elevate />
        <div ref={(el) => (scrollRef.current[2] = el)}></div>
        <ProductSupport />
        <NeedSupport />
      </div>
    </div>
  );
}
