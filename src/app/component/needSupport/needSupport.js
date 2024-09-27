const NeedSupport = () => {
  return (
    <div className="lg:flex p-5 lg:p-12 pb-0 ">
      <img
        src="/img/main/earphone.jpg"
        alt=""
        className="w-full lg:w-1/2"
      ></img>
      <div className="flex items-center  bg-slate-100">
        <div className="p-6 md:p-8 lg:p-12 xl:p-20">
          <div className=" md:text-start text-2xl lg:text-4xl text-gray-600 pb-5">
            Need support? We're here to assist you every step of the way
          </div>
          <div className="font-extralight pb-8">
            Access product support and frequently asked questions in our Support
            Center
          </div>
          <div className="md:justify-normal">
            <button className="cursor-pointer bg-zinc-700 text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-white">
              Support Center
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NeedSupport;
