import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import '../css/profilSlider.css';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

function ProfilSlider() {
  return (
    <Swiper
      pagination={{ dynamicBullets: true, clickable: true }}
      modules={[Pagination]}
      grabCursor={true}
      className="mySwiper rounded-[20px] sm:rounded-[28px] lg:rounded-[36px] shadow-[0px_7px_33.9px_-1px_#00000033]"
    >
      <SwiperSlide>
        <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[470px] overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/img/profilSlider1.jpg')",
              backgroundPosition: window.innerWidth >= 1024 ? "50px -100px" : "center center",
            }}
          ></div>
    
          {/* Gradient overlay */}
          <div className="absolute bottom-0 w-full h-[50px] sm:h-[60px] lg:h-[70px] bg-gradient-to-t from-[#1A1010] to-[#00000000]"></div>
        </div>
      </SwiperSlide>
    
      <SwiperSlide>
        <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[470px] overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/img/profilSlider1.jpg')",
              backgroundPosition: window.innerWidth >= 1024 ? "50px -100px" : "center center",
            }}
          ></div>
    
          <div className="absolute bottom-0 w-full h-[50px] sm:h-[60px] lg:h-[70px] bg-gradient-to-t from-[#1A1010] to-[#00000000]"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default ProfilSlider