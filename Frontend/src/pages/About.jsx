import React from "react";

import { assets } from "../assets/assets";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const About = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row border border-gray-400 ">
        {/* Hero left side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 ">
          <div className="text-[#414141]">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base uppercase">
                Trusted Marine Equipment Suppliers
              </p>
            </div>
            <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed uppercase">
              about us
            </h1>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base uppercase">
                Heritage in Marine Recycling
              </p>
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            </div>
          </div>
        </div>

        {/* Hero right side */}
        <div className="w-full sm:w-1/2 h-full">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="w-full h-full" src={assets.ship_1} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img className="w-full h-full" src={assets.ship_2} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img className="w-full h-full" src={assets.ship_3} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img className="w-full h-full" src={assets.ship_4} alt="" />
            </SwiperSlide>
          </Swiper>
          {/* <img className="w-full sm:w-1/2 " src={assets.hero_img} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
