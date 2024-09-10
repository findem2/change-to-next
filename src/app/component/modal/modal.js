// components/Modal.js
import { useState } from "react";
import Modalhead from "./\bmodalhead";

const Modal = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="">
        <svg
          className="flex items-center justify-center cursor-pointer"
          role="presentation"
          strokeWidth="2"
          focusable="false"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path
            d="M1 5h20M1 11h20M1 17h20"
            stroke="currentColor"
            strokeLinecap="round"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex pt-[80%] px-5">
          <div className="bg-white w-96 h-[95%] rounded-lg p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute bottom-[105%] right-[45%] text-black px-5 py-2 h-16 w-16 rounded-full bg-white"
            >
              ✕
            </button>
            <div className="mt-8">
              <h2 className="text-lg font-bold mb-4"></h2>
              <ul className="space-y-4">
                <li className="font-semibold">
                  <Modalhead isOpen={isOpen} setIsOpen={setIsOpen}></Modalhead>
                </li>
                <li className="font-semibold">Earphones</li>
                <li className="font-semibold">Accessories</li>
                <li className="font-semibold">Collaborations</li>
                <li className="font-semibold">Blog</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
