"use client";
// components/Modal.js
import { useState } from "react";

const CollaborationColors = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="flex py-5">
        <div className="text-sm pr-40">Collaboration Colors</div>
        <svg
          role="presentation"
          focusable="false"
          width="20"
          height="20"
          className="icon icon-chevron-bottom "
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
          <div className="bg-white w-96 h-[98%] rounded-lgrelative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute bottom-[10%] left-[5.5%] text-black  rounded-full bg-white"
            >
              <div className=" flex">
                <div className="text-sm pr-40">Collaboration Colors</div>
                <svg
                  role="presentation"
                  focusable="false"
                  width="20"
                  height="20"
                  viewBox="0 0 10 7"
                  className="icon icon-chevron-bottom -scale-y-100"
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
                <li className="font-light text-gray-700">
                  MW75 Automobili Lamborghini
                </li>
                <li className="font-light text-gray-700">MW75 BUGATTI</li>
                <li className="font-light text-gray-700">MW75 Mercedes-AMG</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CollaborationColors;
