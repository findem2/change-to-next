function Description() {
  return (
    <div className="px-5">
      <div className="pt-5 flex items-center text-xs text-gray-600">
        <img src="img/page-product/ANC.svg" />
        ANC
      </div>
      <div className=" flex items-center text-xs text-gray-600">
        <img src="img/page-product/headphones_icon_48cc64b5-d3e6-454d-8877-a2a3030929f7.svg" />
        Anodized aluminum, tempered glass and lambskin leather
      </div>
      <div className=" flex items-center text-xs text-gray-600">
        <img src="img/page-product/Driver.svg" />
        40mm beryllium drivers
      </div>
      <div className=" flex items-center text-xs text-gray-600">
        <img src="img/page-product/battery_icon_f66375fe-5a76-4287-bdaa-ea7291939d1f.svg" />
        32 hours of listening
      </div>
      <div className="flex items-center text-xs text-gray-600">
        <img src="img/page-product/Icon_Bluetooth.svg" />
        Bluetooth® 5.1
      </div>
      <div className="flex items-center text-xs text-gray-600">
        <img src="img/page-product/Mic.svg" />4 beamforming microphones
      </div>
      <div className="py-10 text-center text-xs text-gray-400">
        Not sure if this is the best headset for you?
        <div>
          Compare Headphones
          <div className=" bg-gray-200 h-[1px] w-40  "></div>
        </div>
      </div>
      <div className="flex">
        <button className="hover:text-black text-gray-600 text-sm hover:after:">
          Feature
        </button>
        <button>Tech Specs</button>
        <button>Support</button>
      </div>
    </div>
  );
}

export default Description;
