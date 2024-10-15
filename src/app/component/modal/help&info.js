"use client";
// components/Modal.js
import { useState } from "react";

const HelpandInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="flex ">
        <div className="uppercase custom:normal-case pt-9 custom:pt-0 pb-6  font-semibold custom:flex custom:justify-center custom:items-center">
          Help & Info
        </div>
      </button>

      {isOpen && (
        <div className="">
          <div className="bg-black h-[98%] rounded-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute bottom-[100%] left-[0%] text-white bg-black"
            >
              <div className=" flex">
                <div className="uppercase custom:normal-case pt-9 custom:pt-0 pb-6  font-semibold custom:flex custom:justify-center custom:items-center">
                  Help & Info
                </div>
              </div>
            </button>
            <ul className="text-white space-y-5 pb-5">
              <li className="font-extralight">Product Comparisons</li>
              <li className="font-extralight">Product Support</li>
              <li className="font-extralight">Shopping Info</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpandInfo;