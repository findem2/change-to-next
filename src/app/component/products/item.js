import ColorDot from "./colordot";
// import img1 from "../../img/feature/MW09/MW09.png";
// import img2 from "../../img/feature/MW75/MW75.png";
// import img3 from "../../img/feature/MH40/MH40.webp";
// import img4 from "../../img/feature/MG20/MG20.png";
// import HoverImg1 from "../../img/feature/MW09/MW09_Side.png";
// import HoverImg2 from "../../img/feature/MW75/MW75_Side.png";
// import HoverImg3 from "../../img/feature/MH40/MH40_Side.png";
// import HoverImg4 from "../../img/feature/MG20/MG20_Side.png";

const Item = () => {
  // a ["","",""]

  // elems=a.map(str) retur<ColorDot data = str />

  return (
    <div className="flex overflow-x-scroll scrollbar-hide">
      <div className="custom:w-1/4 mr-5">
        <div className="relative opacity-100 cursor-pointer ">
          <img src="/img/feature/MW09/MW09.png" alt="before" />
          <img
            src="/img/feature/MW09/MW09_Side.png"
            alt="after"
            className="absolute bottom-0 opacity-0 hover:opacity-100 hover:animate-fadein animate-fadeout  bg-white"
          />
        </div>
        <div className="xxl:p-[39.5px]">
          <div>
            <div>
              <div className="TopPrice hidden lg:inline-block float-end text-gray-700">
                From €399,00
              </div>
              <div className="ModelName cursor-pointer text-sm md:text-xl font-semibold text-gray-700">
                MW09
              </div>
            </div>
            <div className="Explain my-2 text-sm md:text-lg text-gray-500 font-light">
              Active Noise-Cancelling True Wireless Earphones
            </div>
            <div className="UnderPrice lg:hidden text-sm  text-gray-600 font-bold">
              From €399,00
            </div>
          </div>
          <div className="flex   flex-wrap">
            <input type="radio" value="ColorDot" />
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
          </div>
        </div>
      </div>
      <div className="custom:w-1/4 mr-5">
        <div className="relative opacity-100 cursor-pointer ">
          <img src="/img/feature/MW75/MW75.png" alt="before" />
          <img
            src="/img/feature/MW75/MW75_Side.png"
            alt="after"
            className="absolute bottom-0 opacity-0 hover:opacity-100 hover:animate-fadein animate-fadeout  bg-white"
          />
        </div>
        <div className="xxl:p-[39.5px]">
          <div>
            <div>
              <div className="TopPrice hidden lg:inline-block float-end text-gray-700">
                €629,00
              </div>
              <div className="ModelName cursor-pointer text-sm md:text-xl font-semibold text-gray-700">
                MW75
              </div>
            </div>
            <div className="Explain my-2 text-sm md:text-lg text-gray-500 font-light">
              Active Noise-Cancelling Wireless Headphones
            </div>
            <div className="UnderPrice lg:hidden text-sm  text-gray-600 font-bold">
              €629,00
            </div>
          </div>
          <div className="flex   flex-wrap">
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
          </div>
        </div>
      </div>
      <div className="custom:w-1/4 mr-5">
        <div className="relative opacity-100 cursor-pointer ">
          <img src="/img/feature/MH40/MH40.webp" alt="before" />
          <img
            src="/img/feature/MH40/MH40_Side.png"
            alt="after"
            className="absolute bottom-0 opacity-0 hover:opacity-100 hover:animate-fadein animate-fadeout  bg-white"
          />
        </div>
        <div className="xxl:p-[39.5px]">
          <div>
            <div>
              <div className="TopPrice hidden lg:inline-block float-end text-gray-700">
                €449,00
              </div>
              <div className="ModelName cursor-pointer text-sm md:text-xl font-semibold text-gray-700">
                MH40 Wireless
              </div>
            </div>
            <div className="Explain my-2 text-sm md:text-lg text-gray-500 font-light">
              Wireless Over-Ear Headphones
            </div>
            <div className="UnderPrice lg:hidden text-sm text-gray-600 font-bold">
              €449,00
            </div>
          </div>
          <div className="flex   flex-wrap">
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
          </div>
        </div>
      </div>
      <div className="custom:w-1/4 mr-5">
        <div className="relative opacity-100 cursor-pointer ">
          <img src="/img/feature/MG20/MG20.png" alt="before" />
          <img
            src="/img/feature/MG20/MG20_Side.png"
            alt="after"
            className="absolute bottom-0 opacity-0 hover:opacity-100 hover:animate-fadein animate-fadeout  bg-white"
          />
        </div>
        <div className="xxl:p-[39.5px]">
          <div>
            <div>
              <div className="TopPrice hidden lg:inline-block float-end text-gray-700">
                €469,00
              </div>
              <div className="ModelName cursor-pointer text-sm md:text-xl font-semibold text-gray-700">
                MG20
              </div>
            </div>
            <div className="Explain my-2 text-sm md:text-lg text-gray-500 font-light">
              Wireless Gaming Headphones
            </div>
            <div className="UnderPrice lg:hidden text-sm  text-gray-600 font-bold">
              €469,00
            </div>
          </div>
          <div className="flex   flex-wrap">
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
            <ColorDot></ColorDot>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
