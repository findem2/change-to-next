"use client";

import React, { useRef } from "react";
import One from "./one";
import Two from "./two";
import Three from "./three";

export default function hoke() {
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
      <div onClick={handleScrollView}>
        <span>On</span>
        <span>Tw</span>
        <span>Th</span>
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
