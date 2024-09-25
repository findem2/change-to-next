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
              className="absolute bottom-[103%] left-[0%] text-black  rounded-full bg-white"
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
                  <div className="font-light">
                    Up to 32 hours of battery life or up
                  </div>
                  <div className="font-light">to 28 hours with ANC enabled</div>
                </li>
                <li className="text-gray-600">
                  <div className="pb-2">Bluetooth Profile</div>
                  <div className="font-light">
                    Bluetooth® 5.1 range of 100ft/30m
                  </div>
                  <div className="font-light">
                    with AAC, aptX™ Adaptive up to 24
                  </div>
                  <div className="font-light">bit/ 48kHz, and SBC. Hi-res</div>
                  <div className="font-light">requires a compatible source</div>
                  <div className="font-light">device and streaming service</div>
                </li>
                <li className="text-gray-600">
                  <div className="pb-2">Wired Digital Headphone Connection</div>
                  <div className="font-light">
                    Supports hi-res audio up to 24-bit /
                  </div>
                  <div className="font-light">
                    96kHz using provided USB-C to
                  </div>
                  <div className="font-light">
                    USB-C cable with supported devices
                  </div>
                </li>
                <li className="text-gray-600">
                  <div className="pb-2">Analog Headphone Connection</div>
                  <div className="font-light">
                    USB-C to 3.5mm cable for optional
                  </div>
                  <div className="font-light">analog audio connection</div>
                </li>
                <li className="text-gray-600">
                  <div className="pb-2">Cables</div>
                  <div className="font-light">
                    USB-C to 3.5mm audio cable, USB-C
                  </div>
                  <div className="font-light">to USB-C charging cable</div>
                </li>
                <li className="text-gray-600">
                  <div className="pb-2">Antenna</div>
                  <div className="font-light">Internal antenna</div>
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
