"use client";

import React, { useRef } from "react";
import One from "./one";
import Two from "./two";
import Three from "./three";

export default function srcoll() {
  const scrollRef = useRef([]);

  const handleScrollView = (event) => {
    const name = event.target.innerText;
    const category = {
      On: 0,
      Tw: 1,
      Th: 2,
    };
    scrollRef.current[category[name]].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className=" space-x-5" onClick={handleScrollView}>
        <span className=" cursor-pointer">On</span>
        <span className=" cursor-pointer">Tw</span>
        <span className=" cursor-pointer">Th</span>
      </div>
      <div className=" relative">
        {/* <div className="flex min-h-14 justify-between py-2  sticky top-0 bg-white w-full sm:px-5 md:px-10 xl:px-12 custom:flex xxl:max-w-1400">
          맨위로
        </div> */}
      </div>
      <div>
        <div ref={(el) => (scrollRef.current[0] = el)}>
          <One />
        </div>
        <div ref={(el) => (scrollRef.current[1] = el)}>
          <Two />
        </div>
        <div ref={(el) => (scrollRef.current[2] = el)}>
          <Three />
        </div>
      </div>
    </>
  );
}
