// components/Modal.js
import { useState } from "react";
import Link from "next/link";

const Modalhead = () => {
  const [isOpen, setIsOpen] = useState(false);
  let link = "http://localhost:3000";
  let name = "손";

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className=" ">
        Headphones
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
              <button onClick={() => setIsOpen(false)} className=" text-black">
                ← Headphones
              </button>
              <ul className="space-y-4">
                <li className="flex">
                  <div>
                    <img
                      className=""
                      src="/img/hamburger/MW75S1-PDP_1350x1350_Hero_V2_1a4bd298-a68f-47ca-b050-b3cc3f47283e.webp"
                    ></img>
                    <div>MW75</div>
                    <Link href={link}> 복{name}</Link>
                  </div>
                  <div>
                    <img
                      className=""
                      src="/img/hamburger/MH40G4-W2-PDP_1350x1350_Hero_V1_06e56a75-704e-47e6-a742-ef7a3709fefd.webp"
                    ></img>
                    <div>MH40 WIRELESS</div>
                    <div></div>
                  </div>
                </li>
                <li className="font-semibold">이어폰</li>
                <li className="font-semibold">액세서리</li>
                <li className="font-semibold">콜라보레이션</li>
                <li className="font-semibold">블로그</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modalhead;
