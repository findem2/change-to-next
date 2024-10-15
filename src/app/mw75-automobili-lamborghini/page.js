"use client";

import React, { useRef } from "react";

import Content from "../mw75/content/content";
import Description from "../mw75/description/description";
import FFP from "../mw75/ffp/ffp";
import InTheBox from "../mw75/in the box/in the box";
import Swipers from "../mw75/swiper/swipers";
import TechSpecs from "../mw75/tech specs/tech specs";
import YoutubePlayBtn from "../mw75/youtube play btn/youtube play btn";
import Features from "../component/spac/features";
import Elevate from "../mw75/Elevate/elevate";
import ProductSupport from "../mw75/productSupport/productSupport";
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
          <span className="font-light hover:text-black text-gray-600 text-sm hover:after:content-'' hover:after:w-28 hover:after:h-0.5 hover:after:bg-black hover:after:absolute hover:after:mt-4 hover:after:block">
            Feature
          </span>
          <div className="font-light hover:text-black text-gray-600 text-sm hover:after:content-'' hover:after:w-24 hover:after:h-0.5 hover:after:bg-black hover:after:absolute hover:after:mt-[1.1rem] hover:after:block">
            <span>Tech</span>
            <div>Specs</div>
          </div>
          <span className="font-light hover:text-black text-gray-600 text-sm hover:after:content-'' hover:after:w-28 hover:after:h-0.5 hover:after:bg-black hover:after:absolute hover:after:mt-4 hover:after:block">
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
