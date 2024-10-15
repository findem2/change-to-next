"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

import { Pagination, Parallax, FreeMode } from "swiper/modules";

const Elevate = () => {
  return (
    <div>
      <div className="pl-5 pr-6">
        <div className="text-2xl text-gray-600 pb-2">
          Elevate Your Listening Experience
        </div>
        <span className=" text-gray-600 font-light">
          Add any of the products below to your cart along with the MW75 and
          <span className="font-semibold"> save 10% </span>with code
          <span className="font-semibold"> MW75BUNDLE</span>
        </span>
      </div>
      <div>
        <div className="pl-5">
          <Swiper
            modules={[Pagination, Parallax, FreeMode]}
            parallax={true}
            spaceBetween={10}
            className="w-full flex space-x-16"
            slidesPerView={1.4} //한 슬라이드에 보여줄 갯수
          >
            <SwiperSlide className="pr-7">
              <img
                className=""
                src="img/pagemw75/elevate/RP75BRN_BROWN_800x800_ba3ed082-37d3-4ad4-909d-fe61d5aff1dd (1).webp"
              ></img>
              <div className="text-gray-700 pb-2 text-xs font-semibold ">
                MW75 Ear Pads
              </div>
              <div className="flex justify-between font-extralight text-xs">
                <div className="">€49,00</div>
                <div className="">+ Add</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pr-7">
              <img src="img/pagemw75/elevate/MW75_case_closed_flat_800x800_90e3f54e-e134-4b9a-8a8b-e763ff3eb4d7.webp"></img>
              <div className="text-gray-700 pb-2">Hard Shell Travel Case</div>
              <div className="flex justify-between font-extralight text-xs">
                <div className="font-extralight">€69,00</div>
                <div className="">+ Add</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" relative pr-7">
              <img src="img/pagemw75/elevate/MC300_S3_1350x1350_Hero_alone_V1_99f2ff59-ff12-41e1-a188-d47fc2f5129f.webp"></img>
              <div className="text-gray-700 pb-2">
                MC300 Wireless Charge Pad and Headphone Stand
              </div>
              <div className=" absolute text-xs border-zinc-700 border-[1px]  rounded-[0.2rem] bg-zinc-700 text-white items-center justify-center top-3 left-7 p-1">
                Sold out
              </div>
              <div className="flex justify-between font-extralight text-xs">
                <div className="font-extralight">€119,00</div>
                <div className="">+ Add</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="pr-7">
              <img src="img/pagemw75/elevate/MW01-PDP_1350x1350_Closed_V1_f3d07518-3344-4065-b951-46d42912a51f.webp"></img>
              <div className="text-gray-700 pb-2">MW01 Wireless</div>
              <div className=" absolute text-xs border-zinc-700 border-[1px]  rounded-[0.2rem] bg-zinc-700 text-white items-center justify-center top-3 left-7 p-1">
                Sold out
              </div>
              <div className="flex justify-between font-extralight text-xs">
                <div className="font-extralight">€69,00</div>
                <div className="">+ Add</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Elevate;
