// import mw09 from "../../img/feature/color/MW09/MW09_first_color.png";

const ColorDot = () => {
  return (
    <>
      <input
        type="radio"
        className=" relative cursor-pointer rounded-full bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
      ></input>
      <img
        // src="/img/feature/color/MW09/MW09_first_color.png"
        className="rounded-full w-7 h-7 p-[1px] m-1 bg-gray-700 border-2 focus:border-red-600 focus:ring-[2px] focus:ring-gray-700"
      ></img>
      <div className="rotate-45 p-[1px] w-full bg-white absolute top-[0.65rem] left-0"></div>
    </>
  );
};
export default ColorDot;
