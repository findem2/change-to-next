// components/Modal.js
import { useState } from "react";

const Modalhead = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              className="absolute top-3 left-3 text-black"
            >
              ←
            </button>
            <div className="mt-8">
              <h2 className="text-lg font-bold mb-4">메뉴</h2>
              <ul className="space-y-4">
                <li className="font-semibold">헤드폰</li>
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
