"use client";
// components/Modal.js
import { useState } from "react";

const MaterialsDesign = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="flex py-5">
        <div className="text-gray-700 pr-32">Materials and Design </div>
        <svg
          role="presentation"
          focusable="false"
          width="20"
          height="20"
          className="ml-3 icon icon-chevron-bottom "
          viewBox="0 0 10 7"
        >
          <path
            d="m1 1 4 4 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="">
          <div className="bg-white h-[5%] rounded-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute bottom-[104%] left-[0%] text-black  rounded-full bg-white"
            >
              <div className=" flex">
                <div className="text-gray-700 pr-32">Materials and Design</div>
                <svg
                  role="presentation"
                  focusable="false"
                  width="20"
                  height="20"
                  viewBox="0 0 10 7"
                  className="ml-3 icon icon-chevron-bottom -scale-y-100"
                >
                  <path
                    d="m1 1 4 4 4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  ></path>
                </svg>
              </div>
            </button>
            <div className="">
              <ul className="space-y-5 pb-10">
                <li className="text-gray-600">
                  <div className="pb-2">Materials</div>
                  <div className="font-light">
                    Lambskin leather headband and ear
                  </div>
                  <div className="font-light">pads / aluminum and tempered</div>
                  <div className="font-light">
                    glass ear cups / anodized aluminum
                  </div>
                  <div className="font-light">controls</div>
                </li>
                <li className="text-gray-600">
                  <div className="pb-2">Dimensions</div>
                  <div className="font-light">
                    160.75mm x 197.83mm x 83.57mm
                  </div>
                </li>
                <li className="text-gray-600">
                  <div className="pb-2">Weight</div>
                  <div className="font-light">338g</div>
                </li>
                <li className="text-gray-600">
                  <div className="pb-2">Ear Coupling</div>
                  <div className="font-light">Over-ear</div>
                </li>
                <li className="text-gray-600">
                  <div className="pb-2">Ear Pads</div>
                  <div className="font-light">
                    Replaceable magnetic lambskin-
                  </div>
                  <div className="font-light">wrapped memory foam</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MaterialsDesign;
