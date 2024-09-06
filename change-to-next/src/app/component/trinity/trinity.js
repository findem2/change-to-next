// import first from "../../img/card/cardMH40.jpg";
// import second from "../../img/card/cardMW09.jpg";
// import third from "../../img/card/cardMW75.jpg";
// import effect3 from "../../img/card/MD_MW75_Homepage_Mobile-V1.webp";
// import effect2 from "../../img/card/MD_MW09_Homepage_Mobile.webp";
// import effect1 from "../../img/card/MD_MH40-W_Homepage_Mobile-V1.webp";

const Trinity = () => {
  return (
    <div className="p-5 md:p-10 lg:p-12 pt-0 md:pt-0 lg:pt-0 pb-6 md:pb-6 lg:pb-6">
      <div className="md:flex pb-4 md:pb-3 lg:pb-6">
        <div className="pb-4 md:pb-0 md:pr-3 lg:pr-6 relative">
          <picture>
            <source
              srcSet="/img/card/MD_MW75_Homepage_Mobile-V1.webp"
              media="(max-width: 699px)"
              className="cursor-pointer"
            />
            <img
              src="/img/card/cardMH40.jpg"
              alt="사진변환"
              className="cursor-pointer"
            />
          </picture>
          <div className="absolute bottom-1 p-5 pb-8 md:p-10 lg:p-12">
            <div className="after:content-'' after:w-24 lg:after:w-28 after:h-0.5 after:bg-white after:absolute after:mt-2 after:block text-white relative pb-5 font-light text-sm lg:text-base xl:font-light">
              MH40 Wireless
            </div>
            <div className="text-white lg:text-2xl font-light pb-3 after:content-['_style'] inline-block">
              Up to 30-hours of continuous playtime, unlimited
            </div>
            <button className="cursor-pointer bg-white text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-gray-700 block">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="relative">
          <picture>
            <source
              srcSet="/img/card/MD_MW09_Homepage_Mobile.webp"
              media="(max-width: 699px)"
              className="cursor-pointer"
            />
            <img
              src="/img/card/cardMW09.jpg"
              alt="사진변환"
              className="cursor-pointer"
            />
          </picture>
          <div className="absolute bottom-1 p-5 md:p-10 lg:p-12">
            <div className="after:content-'' after:w-10 lg:after:w-12 after:h-0.5 after:bg-white after:absolute after:mt-2 after:block text-white relative w-5 pb-5 font-light text-sm lg:text-base xl:font-light">
              MW09
            </div>
            <div className="text-white lg:text-2xl font-light pb-3 ">
              Solid construction, sleek finish
            </div>
            <button className="cursor-pointer bg-white text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-gray-700">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <picture>
          <source
            srcSet="/img/card/MD_MW75_Homepage_Mobile-V1.webp"
            media="(max-width: 699px)"
            className="cursor-pointer"
          />
          <img
            src="/img/card/cardMW75.jpg"
            alt="사진변환"
            className="cursor-pointer"
          />
        </picture>
        <div className="absolute bottom-1 p-5 md:p-10 lg:p-12">
          <div className="after:content-'' after:w-10 lg:after:w-12 after:h-0.5 after:bg-white after:absolute after:mt-2 after:block text-white relative w-5 pb-5 font-light text-sm lg:text-base xl:font-light">
            MW75
          </div>
          <div className="text-white lg:text-2xl font-light pb-3 ">
            Perfect sound,perfect slience
          </div>
          <button className="cursor-pointer bg-white text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-gray-700">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trinity;

// after
// after:absolute after:scale-x-0 after:origin-bottom-left after:border-b after:w-100% after:h-0
// hover:after:origin-bottom-right hover:after:scale-x-1

// scale:{
//   "0%" :{
//     opacity: "0"
//     transform: "translate3d(-100%, 0, 0)"
// },
// "100%":{
//     opacity: "1"
//     transform: "translateZ(0)"
// }
// }
// },
