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

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 ">
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 ">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base uppercase">
              OUR PRODUCTS
            </p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed uppercase">
            Latest Arrival
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base uppercase">
              Shop Now
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
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true} // Infinite loop enabled
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {/* Add your product images here */}
          <SwiperSlide>
            <img className="w-full sm:w-1/2 " src={assets.hero_img} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full sm:w-1/2 " src={assets.hero_img} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full sm:w-1/2 " src={assets.hero_img} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full sm:w-1/2 " src={assets.hero_img} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full sm:w-1/2 " src={assets.hero_img} alt="" />
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
        {/* <img className="w-full sm:w-1/2 " src={assets.hero_img} alt="" /> */}
      </div>
    </div>
  );
};

export default Hero;
