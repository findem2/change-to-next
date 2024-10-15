"use client";

import EarPads from "../../mw75/modal/earpads";
import HeadBand from "../../mw75/modal/headband";
import IntuitiveControls from "../../mw75/modal/intuitivecontrols";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

import {
  Pagination,
  Parallax,
  Navigation,
  FreeMode,
  EffectFade,
} from "swiper/modules";

function Features() {
  return (
    <div>
      <div className="p-5">
        <div className="">
          <img src="img/pagemh40-wireless/features/MH40_The_Modern_Thinking_Cap.jpg"></img>
          <div className="py-10">
            <div className="text-2xl text-gray-700 pb-3">
              The Modern Thinking Cap
            </div>

            <div className="font-extralight font-sans">
              Custom 40mm titanium drivers deliver precise, expansive sound with
              clearer highs and richer lows so you can hear your favorite songs
              in a whole new way. Our signature removable magnetic ear pads are
              easily replaceable and provide serious sound isolation
            </div>
          </div>
        </div>
        <div>
          <img src="img/pagemh40-wireless/features/MG20_Built-from-the-Best.jpg"></img>
          <div className="py-5">
            <div className="text-2xl text-gray-700 pb-3">
              Built from the Best
            </div>
            <div className="font-extralight font-sans pb-3">
              Lightweight anodized aluminum and coated canvas offer durability
              where you need it, while a lambskin-leather headband and ear pads
              are so soft you won't want to take them off
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img src="img/pagemh40-wireless/features/MH40_Full-Width.jpg"></img>
        <div className="px-5 py-20">
          <div className="flex justify-center items-baseline space-x-2">
            <div className="flex justify-center font-light text-gray-700 text-3xl">
              {" "}
              66{" "}
            </div>
            <div className="flex justify-center text-2xl text-gray-700"> %</div>
          </div>
          <p className="flex justify-center text-2xl text-gray-700 pb-3">
            {" "}
            More battery Life
          </p>

          <div className="flex text-center font-thin font-sans">
            Up to 30 hours of battery life means multiple commutes, work days,
            and jam sessions without having to worry about plugging in. In a
            rush? No problem. Enjoy 6 hours of listening after just 15 minutes
            of charge time.
          </div>
        </div>
      </div>
      <div className="p-5">
        <div>
          <img src="img/pagemh40-wireless/features/MG20_Effortless-Connectivity.jpg"></img>
          <div className="text-2xl text-gray-700 pb-3 pt-5">
            Effortless Connectivity
          </div>
          <div className="font-extralight font-sans pb-12">
            Bluetooth 5.2 with multipoint and quick-pairing technology provides
            a dependable connection for a distance of up to 30m/100 ft, while an
            optional USB-C to USB-C cord allows for digital audio up to
            24-bit/96kHz
          </div>
        </div>
        <div>
          <img src="img/pagemh40-wireless/features/MG20_Powerful-Mics.jpg"></img>
          <div className="text-2xl text-gray-700 pt-5 pb-2">
            Powerful Microphones
          </div>
          <div className="font-extralight font-sans pb-12">
            Taking calls on-the-go has never been easier. A dual microphone
            arraywith newproprietary wind noise reductiontechnology provides
            best-in-class talk in any environment
          </div>
        </div>
        <div className="pb-12">
          <img src="img/pagemh40-wireless/features/MG20_App-Image.jpg"></img>
          <div className="text-2xl text-gray-700 pt-5 pb-2">
            Personalize Your Sound
          </div>
          <div className="font-extralight font-sans pb-7">
            Get the most out of your sound tool with the M&D Connect app. Adjust
            your EQ with in-app sound profiles, access additional ANC modes, and
            download updates for your MW75 Wireless Headphones all from your
            mobile device with M&D Connect.
          </div>
          <button className="cursor-pointer bg-zinc-700 text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-white">
            Learn More
          </button>
        </div>
      </div>

      <div className="p-5 pb-0">
        <div className="space-y-4">
          <img src="img/pagemh40-wireless/features/MH40_Gallery-Image1.jpg"></img>
          <img src="img/pagemh40-wireless/features/MH40_Gallery-Image2.jpg"></img>
          <img src="img/pagemh40-wireless/features/MH40_Gallery-Image3.jpg"></img>
        </div>
        <div className="flex justify-center text-xs text-gray-700 py-10">
          What The Experts are Saying
        </div>
        <div className="pl-5 slide">
          <Swiper
            modules={[Pagination, Parallax, FreeMode, Navigation, EffectFade]}
            parallax={true}
            spaceBetween={30}
            slidesPerView={1} //한 슬라이드에 보여줄 갯수
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}

            // className="w-full flex space-x-5"
          >
            <SwiperSlide className="text-sm text-center ">
              <div className="text-gray-700 pb-8">
                With a dead-gorgeous design built from elements like anodized
                aluminum, lambskin, and titanium, the MH40 look and feel
                different than the monolithic plastic shells of most rivals.
              </div>
              <div className="text-gray-600 text-xs  ">- WIRED</div>
            </SwiperSlide>
            <SwiperSlide className="text-sm text-center ">
              <div className="text-gray-700 pb-8">
                The sound quality is deliberately designed to be warm and
                pleasing, with a perfect balance across all frequencies. The
                bass is deep and gratifying, the mids are rich and prominent,
                and the highs are not overly sharp. The overall result is a
                remarkably cohesive sound that creates a delightful listening
                experience, regardless of the music genre.
              </div>
              <div className="text-gray-600 text-xs  ">- AndroidGuys</div>
            </SwiperSlide>
            <SwiperSlide className="text-sm text-center pr-5">
              <div className="text-gray-700 pb-8">
                There’s great attention to detail in the sound profile of the
                MH40 too, and again, it’s apparent across different types of
                music.
              </div>
              <div className="text-gray-600 text-xs  ">- Engadget</div>
            </SwiperSlide>
            <SwiperSlide className="text-sm text-center pr-5">
              <div className="text-gray-700 pb-8">
                These headphones feel every bit as stunning as their $399 price
                should make them out to be, with incredible materials and
                excellent build quality.
              </div>
              <div className="text-gray-600 text-xs  ">- iMore</div>
            </SwiperSlide>
            <SwiperSlide className="text-sm text-center pr-5">
              <div className="text-gray-700 pb-8">
                The Master & Dynamic MH40 Wireless headphones have lost none of
                their aesthetic charms with this critical update. The new 40mm
                titanium drivers have extended the frequency range at both ends
                of the scale with a smoother and more detailed treble and a
                deeper and more rhythmic bass.
              </div>
              <div className="text-gray-600 text-xs  ">- Forbes</div>
            </SwiperSlide>
            <SwiperSlide className="text-sm text-center pr-5">
              <div className="text-gray-700 pb-8">
                The luxurious Master & Dynamic MH40 headphones look great,offer
                strong codec supoort, and last longer per charge than therir
                predecessors.
              </div>
              <div className="text-gray-600 text-xs  ">- PC Mag</div>
            </SwiperSlide>
            <div className="p-16">
              <div className="p-20 swiper-button-next relative after:text-slate-700  after:left-12 rounded-full"></div>
              <div className="p-20 swiper-button-prev after:text-slate-700 rounded-full"></div>
            </div>
          </Swiper>
        </div>
        <div className="bg-gray-100 py-16">
          <div className="text-center text-2xl text-gray-700 px-4 pb-3">
            Not sure which headphones are right for you?
          </div>
          <div className="flex justify-center ">
            <button className="flex  cursor-pointer bg-zinc-700  hover:bg-gray-200 px-8 py-4 text-xs font-semibold text-white">
              Compare All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
