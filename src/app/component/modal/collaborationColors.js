"use client";
// components/Modal.js
import { useState } from "react";

const CollaborationColors = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex py-5 justify-between"
      >
        <div className="text-sm pr-40">Collaboration Colors</div>
        <svg
          role="presentation"
          focusable="false"
          width="20"
          height="20"
          className="ml-1 icon icon-chevron-bottom "
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
          <div className="bg-white h-[98%] rounded-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute bottom-[124%]  text-black  rounded-full bg-white"
            >
              <div className=" flex ">
                <div className="text-sm pr-40">Collaboration Colors</div>
                <svg
                  role="presentation"
                  focusable="false"
                  width="20"
                  height="20"
                  viewBox="0 0 10 7"
                  className="ml-1 icon icon-chevron-bottom -scale-y-100"
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
              <ul className="space-y-3">
                <li className="font-light text-sm text-gray-700">
                  MW75 Automobili Lamborghini
                </li>
                <li className="font-light text-sm text-gray-700">
                  MW75 BUGATTI
                </li>
                <li className="font-light text-sm text-gray-700">
                  MW75 Mercedes-AMG
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CollaborationColors;
