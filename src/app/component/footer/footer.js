// import insta from "../../img/svg/insta.svg";
// import facebook from "../../img/svg/facebook.svg";
// import yotube from "../../img/svg/youtube.svg";
// import spotify from "../../img/svg/spotify.svg";
// import twitter from "../../img/svg/twitter.svg";

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white p-5 md:p-10 lg:p-12 custom:px-24 custom:pt-16 custom:pb-20">
        <div className="custom:flex custom:pb-16">
          <div className="max-w-[780px] custom:min-w-60 custom:w-1/2 xl:mr-48 xxl:mr-12 ">
            <div className="pb-5 text-xl lg:text-3xl">
              Sign up for early access, news and exclusive offers
            </div>
            <div className="pb-5">
              <input
                className="w-full placeholder:text-white bg-black border-white border-2 text-sm font-thin p-3 hover:border-black"
                placeholder="Your email"
              ></input>
            </div>

            <div className="pb-5 flex">
              <input
                type="checkbox"
                className="peer-first:checked:border-black w-5 h-5 border-white rounded-sm bg-black border-[1px] p-2 appearance-none checked:bg-black checked:border-black hover:border-black checked:content-['V'] cursor-pointer"
              ></input>
              <div className="pl-3 text-sm font-thin cursor-pointer peer-first:">
                By checking this box you are agreeing to receive brand updates,
                promotions and content from Master & Dynamic.
              </div>
            </div>
            <button className="cursor-pointer bg-white text-blacktext-base px-8 py-4 text-sm font-semibold text-gray-700 block w-full">
              SUBMIT
            </button>
          </div>
          <div className="custom:w-1/2 custom:flex custom:justify-center custom:items-center custom:pl-32">
            <div className="custom:w-1/3">
              <div className="pt-8 custom:pt-0 pb-5  font-semibold custom:flex custom:justify-center custom:items-center">
                Help & Info
              </div>
              <div className="custom:hidden w-full bg-gray-600 pb-[1px] mb-3 cursor-pointer"></div>
              <div className="hidden custom:inline-block custom:pb-5 font-extralight cursor-pointer">
                Product Comparisons
              </div>
              <div className="hidden custom:inline-block custom:pb-5 font-extralight cursor-pointer">
                Product Support
              </div>
              <div className="hidden custom:inline-block font-extralight cursor-pointer">
                Shopping Info
              </div>
            </div>
            <div className="custom:w-1/3">
              <div className="pb-5 font-semibold custom:flex custom:justify-center custom:items-center">
                About
              </div>
              <div className="custom:hidden w-full bg-gray-600 pb-[1px] mb-3"></div>
              <div className="hidden custom:inline-block custom:pb-5 font-extraligh cursor-pointer">
                About Us
              </div>
              <div className="hidden custom:block custom:pb-5 font-extralight cursor-pointer">
                News
              </div>
              <div className="hidden custom:inline-block font-extralight cursor-pointer">
                Contact Us
              </div>
            </div>
            <div className="custom:w-1/3 pb-12">
              <div className=" pb-5 font-semibold custom:flex custom:justify-center custom:items-center">
                Gifting
              </div>
              <div className="hidden custom:inline-block custom:pb-5 font-extralight cursor-pointer">
                Corporate Gifting
              </div>
              <div className="hidden custom:inline-block font-extralight cursor-pointer">
                Digital Gift Card
              </div>
            </div>
          </div>
        </div>
        <div className="custom:flex">
          <div className="custom:w-2/3">
            <ul className="flex items-center content-center justify-center custopm:justify-end custom:hidden pb-6">
              <li className="cursor-pointer bg-white text-black w-10 h-10 rounded-full items-center justify-center flex m-2">
                <svg
                  role="presentation"
                  focusable="false"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2.4c-2.607 0-2.934.011-3.958.058-1.022.046-1.72.209-2.33.446a4.705 4.705 0 0 0-1.7 1.107 4.706 4.706 0 0 0-1.108 1.7c-.237.611-.4 1.31-.446 2.331C2.41 9.066 2.4 9.392 2.4 12c0 2.607.011 2.934.058 3.958.046 1.022.209 1.72.446 2.33a4.706 4.706 0 0 0 1.107 1.7c.534.535 1.07.863 1.7 1.108.611.237 1.309.4 2.33.446 1.025.047 1.352.058 3.959.058s2.934-.011 3.958-.058c1.022-.046 1.72-.209 2.33-.446a4.706 4.706 0 0 0 1.7-1.107 4.706 4.706 0 0 0 1.108-1.7c.237-.611.4-1.31.446-2.33.047-1.025.058-1.352.058-3.959s-.011-2.934-.058-3.958c-.047-1.022-.209-1.72-.446-2.33a4.706 4.706 0 0 0-1.107-1.7 4.705 4.705 0 0 0-1.7-1.108c-.611-.237-1.31-.4-2.331-.446C14.934 2.41 14.608 2.4 12 2.4Zm0 1.73c2.563 0 2.867.01 3.88.056.935.042 1.443.199 1.782.33.448.174.768.382 1.104.718.336.336.544.656.718 1.104.131.338.287.847.33 1.783.046 1.012.056 1.316.056 3.879 0 2.563-.01 2.867-.056 3.88-.043.935-.199 1.444-.33 1.782a2.974 2.974 0 0 1-.719 1.104 2.974 2.974 0 0 1-1.103.718c-.339.131-.847.288-1.783.33-1.012.046-1.316.056-3.88.056-2.563 0-2.866-.01-3.878-.056-.936-.042-1.445-.199-1.783-.33a2.974 2.974 0 0 1-1.104-.718 2.974 2.974 0 0 1-.718-1.104c-.131-.338-.288-.847-.33-1.783-.047-1.012-.056-1.316-.056-3.879 0-2.563.01-2.867.056-3.88.042-.935.199-1.443.33-1.782.174-.448.382-.768.718-1.104a2.974 2.974 0 0 1 1.104-.718c.338-.131.847-.288 1.783-.33C9.133 4.14 9.437 4.13 12 4.13Zm0 11.07a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm0-8.13a4.93 4.93 0 1 0 0 9.86 4.93 4.93 0 0 0 0-9.86Zm6.276-.194a1.152 1.152 0 1 1-2.304 0 1.152 1.152 0 0 1 2.304 0Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </li>
              <li className="cursor-pointer bg-white text-black w-10 h-10 rounded-full items-center justify-center flex m-2">
                <svg
                  role="presentation"
                  focusable="false"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.183 21.85v-8.868H7.2V9.526h2.983V6.982a4.17 4.17 0 0 1 4.44-4.572 22.33 22.33 0 0 1 2.667.144v3.084h-1.83a1.44 1.44 0 0 0-1.713 1.68v2.208h3.423l-.447 3.456h-2.97v8.868h-3.57Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </li>
              <li className="cursor-pointer bg-white text-black w-10 h-10 rounded-full items-center justify-center flex m-2">
                <svg
                  role="presentation"
                  focusable="false"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.44 5.243c.929.244 1.66.963 1.909 1.876.451 1.654.451 5.106.451 5.106s0 3.452-.451 5.106a2.681 2.681 0 0 1-1.91 1.876c-1.684.443-8.439.443-8.439.443s-6.754 0-8.439-.443a2.682 2.682 0 0 1-1.91-1.876c-.45-1.654-.45-5.106-.45-5.106s0-3.452.45-5.106a2.681 2.681 0 0 1 1.91-1.876c1.685-.443 8.44-.443 8.44-.443s6.754 0 8.438.443Zm-5.004 6.982L9.792 15.36V9.091l5.646 3.134Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </li>
              <li className="cursor-pointer bg-white text-black w-10 h-10 rounded-full items-center justify-center flex m-2">
                <svg
                  role="presentation"
                  focusable="false"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm4.586 14.423a.623.623 0 0 1-.857.206c-2.348-1.434-5.304-1.759-8.785-.964a.623.623 0 0 1-.277-1.215c3.809-.87 7.076-.496 9.712 1.115.294.18.387.564.207.858ZM17.81 13.7a.78.78 0 0 1-1.072.257c-2.688-1.652-6.786-2.13-9.965-1.166A.78.78 0 0 1 6.32 11.3c3.631-1.102 8.146-.568 11.233 1.329a.78.78 0 0 1 .257 1.072Zm.105-2.836c-3.223-1.914-8.54-2.09-11.618-1.156a.935.935 0 1 1-.543-1.79c3.533-1.072 9.405-.865 13.116 1.338a.934.934 0 1 1-.955 1.608Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </li>
              <li className="cursor-pointer bg-white text-black w-10 h-10 rounded-full items-center justify-center flex m-2">
                <svg
                  role="presentation"
                  focusable="false"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.414 4.96c1.506-.024 2.307.479 3.072 1.117.65-.05 1.495-.383 1.992-.614l.484-.242c-.285.702-.67 1.253-1.262 1.67-.131.093-.262.218-.426.277v.009c.843-.008 1.539-.357 2.2-.546v.01a5.934 5.934 0 0 1-1.318 1.384l-.607.442c.01.817-.014 1.598-.18 2.285-.971 3.995-3.544 6.707-7.616 7.868-1.462.418-3.825.59-5.5.208-.83-.188-1.581-.402-2.285-.684a9.54 9.54 0 0 1-1.1-.519l-.342-.19c.378.01.82.105 1.243.043.382-.056.757-.042 1.11-.113.879-.176 1.66-.41 2.332-.77.326-.175.82-.38 1.053-.632a3.59 3.59 0 0 1-1.157-.19c-1.258-.407-1.99-1.154-2.466-2.277.381.038 1.479.129 1.735-.07-.48-.023-.94-.278-1.27-.467-1.012-.58-1.837-1.551-1.83-3.047l.398.173c.254.098.512.15.815.208.128.024.384.093.531.043h-.019c-.195-.208-.514-.347-.71-.571-.65-.739-1.258-1.875-.873-3.229.097-.343.252-.646.417-.926l.019.009c.076.144.244.25.35.372.332.376.741.714 1.158 1.013 1.42 1.016 2.698 1.64 4.75 2.103.522.117 1.124.207 1.746.208-.175-.466-.119-1.22.019-1.67.346-1.134 1.097-1.952 2.2-2.39.263-.105.556-.18.863-.242l.474-.052Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </li>
            </ul>
            <div className=" custom:flex custom:justify-between custom:pb-3">
              <div className="custom:pr-10 text-sm font-thin flex justify-center pb-4 xl:pb-0">
                Do Not Sell / Share
              </div>
              <div className="custom:pr-10 text-sm font-thin flex justify-center pb-4 xl:pb-0">
                Notice At Collection
              </div>
              <div className="custom:pr-10 text-sm font-thin flex justify-center pb-4 xl:pb-0">
                Web Accessibility
              </div>
              <div className="custom:pr-10 text-sm font-thin flex justify-center pb-4 xl:pb-0">
                Personal Data Requests
              </div>
              <div className="custom:pr-10 text-sm font-thin flex justify-center pb-4 xl:pb-0">
                {" "}
                Privacy
              </div>
              <div className="text-sm font-thin flex justify-center pb-4 xl:pb-0">
                Terms
              </div>
            </div>
            <div className="w-full bg-gray-900 pb-[1px] mb-3"></div>
            <div className="">
              <div className="flex justify-center text-center custom:inline-block custom:justify-start text-sm font-thin ">
                Designed and developed in New York City. 1178 Broadway, 3rd
                Floor, Suite 1205 New York, NY, 10001{" "}
              </div>
              <div className="flex justify-center  custom:justify-start text-sm font-thin">
                © 2024. All Rights Reserved.
              </div>
            </div>
          </div>
          <ul className="hidden custom:inline-flex w-1/3 items-center content-center justify-end">
            <li className="cursor-pointer bg-white text-black w-10 h-10 rounded-full items-center justify-center flex m-2">
              <svg
                role="presentation"
                focusable="false"
                width="27"
                height="27"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2.4c-2.607 0-2.934.011-3.958.058-1.022.046-1.72.209-2.33.446a4.705 4.705 0 0 0-1.7 1.107 4.706 4.706 0 0 0-1.108 1.7c-.237.611-.4 1.31-.446 2.331C2.41 9.066 2.4 9.392 2.4 12c0 2.607.011 2.934.058 3.958.046 1.022.209 1.72.446 2.33a4.706 4.706 0 0 0 1.107 1.7c.534.535 1.07.863 1.7 1.108.611.237 1.309.4 2.33.446 1.025.047 1.352.058 3.959.058s2.934-.011 3.958-.058c1.022-.046 1.72-.209 2.33-.446a4.706 4.706 0 0 0 1.7-1.107 4.706 4.706 0 0 0 1.108-1.7c.237-.611.4-1.31.446-2.33.047-1.025.058-1.352.058-3.959s-.011-2.934-.058-3.958c-.047-1.022-.209-1.72-.446-2.33a4.706 4.706 0 0 0-1.107-1.7 4.705 4.705 0 0 0-1.7-1.108c-.611-.237-1.31-.4-2.331-.446C14.934 2.41 14.608 2.4 12 2.4Zm0 1.73c2.563 0 2.867.01 3.88.056.935.042 1.443.199 1.782.33.448.174.768.382 1.104.718.336.336.544.656.718 1.104.131.338.287.847.33 1.783.046 1.012.056 1.316.056 3.879 0 2.563-.01 2.867-.056 3.88-.043.935-.199 1.444-.33 1.782a2.974 2.974 0 0 1-.719 1.104 2.974 2.974 0 0 1-1.103.718c-.339.131-.847.288-1.783.33-1.012.046-1.316.056-3.88.056-2.563 0-2.866-.01-3.878-.056-.936-.042-1.445-.199-1.783-.33a2.974 2.974 0 0 1-1.104-.718 2.974 2.974 0 0 1-.718-1.104c-.131-.338-.288-.847-.33-1.783-.047-1.012-.056-1.316-.056-3.879 0-2.563.01-2.867.056-3.88.042-.935.199-1.443.33-1.782.174-.448.382-.768.718-1.104a2.974 2.974 0 0 1 1.104-.718c.338-.131.847-.288 1.783-.33C9.133 4.14 9.437 4.13 12 4.13Zm0 11.07a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm0-8.13a4.93 4.93 0 1 0 0 9.86 4.93 4.93 0 0 0 0-9.86Zm6.276-.194a1.152 1.152 0 1 1-2.304 0 1.152 1.152 0 0 1 2.304 0Z"
                  fill="currentColor"
                ></path>
              </svg>
            </li>
            <li className="cursor-pointer bg-white text-black w-10 h-10 rounded-full items-center justify-center flex m-2">
              <svg
                role="presentation"
                focusable="false"
                width="27"
                height="27"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.183 21.85v-8.868H7.2V9.526h2.983V6.982a4.17 4.17 0 0 1 4.44-4.572 22.33 22.33 0 0 1 2.667.144v3.084h-1.83a1.44 1.44 0 0 0-1.713 1.68v2.208h3.423l-.447 3.456h-2.97v8.868h-3.57Z"
                  fill="currentColor"
                ></path>
              </svg>
            </li>
            <li className="cursor-pointer bg-white text-black w-10 h-10 rounded-full items-center justify-center flex m-2">
              <svg
                role="presentation"
                focusable="false"
                width="27"
                height="27"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.44 5.243c.929.244 1.66.963 1.909 1.876.451 1.654.451 5.106.451 5.106s0 3.452-.451 5.106a2.681 2.681 0 0 1-1.91 1.876c-1.684.443-8.439.443-8.439.443s-6.754 0-8.439-.443a2.682 2.682 0 0 1-1.91-1.876c-.45-1.654-.45-5.106-.45-5.106s0-3.452.45-5.106a2.681 2.681 0 0 1 1.91-1.876c1.685-.443 8.44-.443 8.44-.443s6.754 0 8.438.443Zm-5.004 6.982L9.792 15.36V9.091l5.646 3.134Z"
                  fill="currentColor"
                ></path>
              </svg>
            </li>
            <li className="cursor-pointer bg-white text-black w-10 h-10 rounded-full items-center justify-center flex m-2">
              <svg
                role="presentation"
                focusable="false"
                width="27"
                height="27"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm4.586 14.423a.623.623 0 0 1-.857.206c-2.348-1.434-5.304-1.759-8.785-.964a.623.623 0 0 1-.277-1.215c3.809-.87 7.076-.496 9.712 1.115.294.18.387.564.207.858ZM17.81 13.7a.78.78 0 0 1-1.072.257c-2.688-1.652-6.786-2.13-9.965-1.166A.78.78 0 0 1 6.32 11.3c3.631-1.102 8.146-.568 11.233 1.329a.78.78 0 0 1 .257 1.072Zm.105-2.836c-3.223-1.914-8.54-2.09-11.618-1.156a.935.935 0 1 1-.543-1.79c3.533-1.072 9.405-.865 13.116 1.338a.934.934 0 1 1-.955 1.608Z"
                  fill="currentColor"
                ></path>
              </svg>
            </li>
            <li className="cursor-pointer bg-white text-black w-10 h-10 rounded-full items-center justify-center flex m-2">
              <svg
                role="presentation"
                focusable="false"
                width="27"
                height="27"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.414 4.96c1.506-.024 2.307.479 3.072 1.117.65-.05 1.495-.383 1.992-.614l.484-.242c-.285.702-.67 1.253-1.262 1.67-.131.093-.262.218-.426.277v.009c.843-.008 1.539-.357 2.2-.546v.01a5.934 5.934 0 0 1-1.318 1.384l-.607.442c.01.817-.014 1.598-.18 2.285-.971 3.995-3.544 6.707-7.616 7.868-1.462.418-3.825.59-5.5.208-.83-.188-1.581-.402-2.285-.684a9.54 9.54 0 0 1-1.1-.519l-.342-.19c.378.01.82.105 1.243.043.382-.056.757-.042 1.11-.113.879-.176 1.66-.41 2.332-.77.326-.175.82-.38 1.053-.632a3.59 3.59 0 0 1-1.157-.19c-1.258-.407-1.99-1.154-2.466-2.277.381.038 1.479.129 1.735-.07-.48-.023-.94-.278-1.27-.467-1.012-.58-1.837-1.551-1.83-3.047l.398.173c.254.098.512.15.815.208.128.024.384.093.531.043h-.019c-.195-.208-.514-.347-.71-.571-.65-.739-1.258-1.875-.873-3.229.097-.343.252-.646.417-.926l.019.009c.076.144.244.25.35.372.332.376.741.714 1.158 1.013 1.42 1.016 2.698 1.64 4.75 2.103.522.117 1.124.207 1.746.208-.175-.466-.119-1.22.019-1.67.346-1.134 1.097-1.952 2.2-2.39.263-.105.556-.18.863-.242l.474-.052Z"
                  fill="currentColor"
                ></path>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
