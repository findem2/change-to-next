"use client";
// components/Modal.js
import { useState } from "react";

const ConnectivityCharging = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="flex py-5">
        <div className="text-gray-700 pr-24">Connectivity and Charging</div>
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
          <div className="bg-white w- h-[98%] rounded-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute bottom-[102.9%] left-[0%] text-black  rounded-full bg-white"
            >
              <div className=" flex">
                <div className="text-gray-700 pr-24">
                  Connectivity and Charging
                </div>
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
              <ul className="space-y-5 pb-10">
                <li className="text-gray-600">
                  <div className="pb-2">Battery Life</div>
                  <div className="font-light">Up to 30 hours</div>
                </li>
                <li className="text-gray-600">
                  <div className="pb-2">Bluetooth Profile</div>
                  <div className="font-light">
                    100ft/30m Bluetooth® 5.2 range
                  </div>
                  <div className="font-light">with AAC, SBC, and aptX(TM)</div>
                  <div className="font-light">Adaptive up to 24-bit/96kHz</div>
                </li>
                <li className="text-gray-600">
                  <div className="pb-2">Multipoint Connectivity</div>
                  <div className="font-light">Yes</div>
                </li>
                <li className="text-gray-600">
                  <div className="pb-2">Wired Digital Headphone Connection</div>
                  <div className="font-light">
                    USB-C to USB-C woven for digital
                  </div>
                  <div className="font-light">
                    USB audio up to 24-bit / 96kHz
                  </div>
                </li>
                <li className="text-gray-600">
                  <div className="pb-2">Cables</div>
                  <div className="font-light">
                    USB-C to 3.5mm analog audio cable,
                  </div>
                  <div className="font-light">
                    USB-C to USB-C charging and digital{" "}
                  </div>
                  <div className="font-light">audio cable</div>
                </li>
                <li className="text-gray-600">
                  <div className="pb-2">Antenna</div>
                  <div className="font-light">Internal antenna</div>
                </li>
                <li className="text-gray-600">
                  <div className="pb-2">Certifications</div>
                  <div className="font-light">
                    Google Fast Pair, Microsoft Switft{" "}
                  </div>
                  <div className="font-light">Pair</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConnectivityCharging;
