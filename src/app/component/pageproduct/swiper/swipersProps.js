"use client";

import React, { useState } from "react";
import Swipers from "./swipers"; // Swipers 컴포넌트를 임포트

const ParentComponent = () => {
  const [image1, setImage1] = useState(
    "/img/page-product/swiperImg/MW75S4-PDP_1.webp"
  );
  const [image2, setImage2] = useState(
    "/img/page-product/swiperImg/MW75S4-PDP_2.webp"
  );
  const [image3, setImage3] = useState(
    "/img/page-product/swiperImg/MW75S4-PDP_3.webp"
  );
  const [image4, setImage4] = useState(
    "/img/page-product/swiperImg/MW75S4-PDP_4.webp"
  );
  const [image5, setImage5] = useState(
    "/img/page-product/swiperImg/MW75S4-PDP_5.webp"
  );
  const [image6, setImage6] = useState(
    "/img/page-product/swiperImg/MW75S4-PDP_6.webp"
  );

  return (
    <Swipers
      image1={image1}
      setImage1={setImage1}
      image2={image2}
      setImage2={setImage2}
      image3={image3}
      setImage3={setImage3}
      image4={image4}
      setImage4={setImage4}
      image5={image5}
      setImage5={setImage5}
      image6={image6}
      setImage6={setImage6}
    />
  );
};

export default ParentComponent;
