"use client";
// components/Modal.js
import { useState } from "react";

const SoundFeatures = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="flex py-5">
        <div className="text-gray-700 pr-36">Sound and Features</div>
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
              className="absolute bottom-[105.5%] left-[0%] text-black  rounded-full bg-white"
            >
              <div className="flex">
                <div className="text-gray-700 pr-36">Sound and Features</div>
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
              <ul className="space-y-5 pb-10">
                <li className="text-gray-600">
                  <div className="pb-2">Drivers</div>
                  <div className="font-light">40mm titanium</div>
                </li>
                <li className="text-gray-600">
                  <div className="pb-2">Impedance</div>
                  <div className="font-light">32 ohms</div>
                </li>
                <li className="text-gray-600">
                  <div className="pb-2">Talk Microphones</div>
                  <div className="font-light">
                    4 microphone talk solution with
                  </div>
                  <div className="font-light">wind reduction</div>
                </li>
                <li className="text-gray-600">
                  <div className="pb-2">Voice Assistant</div>
                  <div className="font-light">Compatible with native voice</div>
                  <div className="font-light">assistants</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SoundFeatures;
