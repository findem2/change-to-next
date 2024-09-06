// import bugatti from "../../img/main/bugatti.jpg";
// import bugatti1 from "../../img/main/MD_Bugatti_Homepage_Mobile-V1.webp";

const Bugatti = () => {
  return (
    <div>
      <div className="flex relative justify-center items-center">
        <picture>
          <source
            srcSet="/img/main/MD_Bugatti_Homepage_Mobile-V1.webp"
            media="(max-width: 699px)"
            className="cursor-pointer"
          />
          <img
            src="/img/main/bugatti.jpg"
            alt="사진변환"
            className="cursor-pointer w-screen"
          />
        </picture>
        <div className=" absolute text-center p-6">
          <div className="text-white text-xl lg:text-2xl pb-5">BUGATTI</div>
          <div className="text-white text-3xl lg:text-4xl pb-8">
            Uniting Performance And Luxury
          </div>
          <button className="cursor-pointer bg-white text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-gray-700">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bugatti;

// git remote set-url origin https://github-findem2@github.com/github-findem2/clone-coding
