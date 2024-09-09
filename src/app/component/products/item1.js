import ColorDot from "./colordot";
import img1 from "../../img/feature/MW09/MW09.png";
import HoverImg1 from "../../img/feature/MW09/MW09_Side.png";

const Item1 = () => {
  // a ["","",""]

  // elems=a.map(str) retur<ColorDot data = str />

  return (
    <div className="flex ">
      <div className="custom:w-1/4 pl-5">
        <div className="relative opacity-100 cursor-pointer ">
          <img src={img1} alt="before" />
          <img
            src={HoverImg1}
            alt="after"
            className="absolute bottom-0 opacity-0 hover:opacity-100 hover:animate-fadein animate-fadeout  bg-white"
          />
        </div>
        <div className="m-6">
          <div>
            <div>
              <div className="TopPrice hidden lg:inline-block float-end text-gray-700">
                From €399,00
              </div>
              <div className="ModelName cursor-pointer text-xl font-semibold text-gray-700">
                MW09
              </div>
            </div>
            <div className="Explain my-2 text-gray-500 font-light">
              Active Noise-Cancelling True Wireless Earphones
            </div>
            <div className="UnderPrice lg:hidden text-gray-500 ">
              From €399,00
            </div>
          </div>
          <div className="flex w-[73.7%] flex-wrap">
            <ColorDot></ColorDot>
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

export default Item1;
