const InTheBox = () => {
  return (
    <div className="pb-20  px-5">
      <div className="text-2xl text-gray-600">In The Box</div>
      <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-4 spac">
        <div className="pr-5 pt-3">
          <img src="img/page-product/InTheBox/MW75_InTheBox_200x200-headphones.png"></img>
          <div className="text-sm font-extralight text-center pt-3 ">
            Wireless Headphones
          </div>
        </div>
        <div className="pl-5 pt-3">
          <img src="img/page-product/InTheBox/MW75_InTheBox_200x200-cable.webp"></img>
          <div className="text-sm font-extralight text-center pt-3">
            USB-C to USB-c Cable
          </div>
        </div>
        <div className="pr-5 pt-3">
          <img src="img/page-product/InTheBox/MW75_InTheBox_200x200-usbc-adapter.webp"></img>
          <div className="text-sm font-extralight text-center pt-3">
            USB-c to USB-A Adapter
          </div>
        </div>
        <div className="pl-5 pt-3">
          <img src="img/page-product/InTheBox/MW75_InTheBox_200x200-audio-cable.png"></img>
          <div className="text-sm font-extralight text-center pt-3">
            USB-c to 3.5mm Audio Cable
          </div>
        </div>
        <div className="pr-5 pt-3">
          <img src="img/page-product/InTheBox/MW75_InTheBox_200x200-adapter.webp"></img>
          <div className="text-sm font-extralight text-center pt-3">
            3.5mm to 1/4" Adapter
          </div>
        </div>
        <div className="pl-5 pt-2">
          <img src="img/page-product/InTheBox/MW75_InTheBox_200x200-flight-adapter.png"></img>
          <div className="text-sm font-extralight text-center pt-3">
            Flight Adapter
          </div>
        </div>
        <div className="pr-5 pt-3">
          {" "}
          <img src="img/page-product/InTheBox/MW75_InTheBox_200x200-case.png"></img>
          <div className="text-sm font-extralight text-center pt-3">
            Hard Shell Travel Case
          </div>
        </div>
      </div>
    </div>
  );
};

export default InTheBox;
