// import sound from "../../img/crafts/sound.jpg";
// import materials from "../../img/crafts/materials.jpg";
// import design from "../../img/crafts/design.jpg";

const Craftsmanship = () => {
  return (
    <div>
      <div className="bg-zinc-900 px-5 md:px-10 lg:px-12 Craftsmanship: py-24 ">
        <div className="pb-11 ">
          <div className="  text-white w-1/2 float-end text-right font-extralight text-opacity-85 hidden lg:inline-block">
            Introduce yourself to a world of immersive sound and
            <p>unrivalled design, where every detail is thoughtfully</p>
            <p>considered to enhance your listening experience</p>
          </div>
          <div className="text-white text-2xl lg:text-5xl lg:w-1/2 after:content-['_Craftsmanship'] after:block">
            The Finest Sound and
          </div>
          <div className="  text-white font-extralight text-opacity-85 lg:hidden">
            Introduce yourself to a world of immersive sound and unrivalled
            design, where every detail is thoughtfully considered to enhance
            your listening experience
          </div>
        </div>
        <div className="lg:flex lg:max-h-72 ">
          <div className="flex relative w-[100%] lg:w-1/3 lg:pr-6 h-80 lg:max-h-72 overflow-hidden pb-8">
            <img
              src="/img/crafts/sound.jpg"
              alt=""
              className="lg:hover:scale-125 lg:peer-[1]:hover:scale-50 object-cover"
            ></img>
            <div className=" absolute text-xl lg:text-3xl right-5 lg:right-20 bottom-16 text-white">
              SOUND
            </div>
          </div>
          <div className="flex relative w-[100%] lg:w-1/3 lg:pr-6 lg:max-h-72 overflow-hidden pb-8">
            <img
              src="/img/crafts/materials.jpg"
              alt=""
              className="lg:hover:scale-125 lg:peer-[2] peer-[1]"
            ></img>
            <div className=" absolute text-xl lg:text-3xl right-5 lg:right-20 bottom-16 text-white">
              MATERIALS
            </div>
          </div>
          <div className="flex relative w-[100%] lg:w-1/3 lg:max-h-72 overflow-hidden  pb-8">
            <img
              src="/img/crafts/design.jpg"
              alt=""
              className="lg:hover:scale-125 lg:peer-[3]"
            ></img>
            <div className=" absolute text-xl lg:text-3xl right-5 lg:right-20 bottom-16 text-white">
              DESIGN
            </div>
          </div>
        </div>
        <div className="pt-3">
          <button className="cursor-pointer bg-white text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-gray-700 block float-end">
            Learn More
          </button>
          <div className="text-white font-extralight text-opacity-85">
            We bring an uncompromising approach to the design and
            <p>performance of our products</p>
          </div>
        </div>
      </div>
      <div className="h-6"></div>
    </div>
  );
};

export default Craftsmanship;
// export { Craftsmanship };

// 반응형 여백 줄어드는거
// 700 이하일때 모양바뀌는거
// 호버시 호버한건 커지고 옆에건 작아지는거
