// import img from "../../img/main/phone.jpg";
// import img2 from "../../img/main/earphone.jpg";

const Connect = () => {
  return (
    <div className="bg-white">
      <div className="p-5 lg:p-12 pb-0">
        <div className="lg:flex items-center">
          <div className="hidden lg:inline w-1/2 p-12 xl:p-20">
            <div className="text-xl lg:text-4xl text-gray-600 pb-5">
              Get The Most Out Of Your Sound with M&D Connect
            </div>
            <div className="text-sm lg:text-base font-extralight pb-8">
              The M&D Connect App lets you download firmware updates, adjust
              settings, and change default preferences for your headset, all
              from your mobile device
            </div>
            <button className="cursor-pointer bg-zinc-700 text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-white">
              Learn More
            </button>
          </div>
          <img
            src="/img/main/phone.jpg"
            alt=""
            className="w-full lg:w-1/2"
          ></img>
          <div className="p-6 md:p-8  lg:hidden ">
            <div className="flex text-center md:text-start text-2xl text-gray-600 pb-5">
              Get The Most Out Of Your Sound with M&D Connect
            </div>
            <div className="text-center md:text-start font-extralight pb-8">
              The M&D Connect App lets you download firmware updates, adjust
              settings, and change default preferences for your headset, all
              from your mobile device
            </div>
            <div className="flex justify-center md:justify-normal">
              <button className="cursor-pointer bg-zinc-700 text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className=" md:flex text-center px-12 pb-10 pt-8 lg:p-16">
          <div className="md:w-1/3 md:mr-24">
            <div className="text-xs lg:text-lg text-gray-600 pb-4">
              Free Premium Shipping
            </div>
            <div className="text-sm lg:text-base font-extralight">
              Free ground shipping on orders of €99 or more
            </div>
          </div>
          <div className="md:w-1/3 md:mr-24">
            <div className="text-xs lg:text-lg text-gray-600 pt-8 md:pt-0 pb-4">
              Free Returns in 14 Days
            </div>
            <div className="text-sm xl:text-base font-extralight">
              We offer a generous 14-day return policy, allowing you to shop
              with confidence
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="text-xs lg:text-lg text-gray-600 pt-8 md:pt-0 pb-4 ">
              Product Protection
            </div>
            <div className="text-sm lg:text-base font-extralight overflow-hidden">
              Rest easy with our{" "}
              <div className="font-extralight overflow-hidden relative cursor-pointer inline">
                manufacturer warranty,
                <p className="bg-black pb-[1px] w-40 right-0"></p>
              </div>{" "}
              ensuring that your product is protected against any manufacturing
              defects or issues
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex p-5 lg:p-12 pb-0 ">
        <img
          src="/img/main/earphone.jpg"
          alt=""
          className="w-full lg:w-1/2"
        ></img>
        <div className="flex items-center  bg-slate-100">
          <div className="p-6 md:p-8 lg:p-12 xl:p-20">
            <div className="flex text-center md:text-start text-2xl lg:text-4xl text-gray-600 pb-5">
              Need support? We're here to assist you every step of the way
            </div>
            <div className="text-center font-extralight pb-8">
              Access product support and frequently asked questions in our
              Support Center
            </div>
            <div className="flex justify-center md:justify-normal">
              <button className="cursor-pointer bg-zinc-700 text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-white">
                Support Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
