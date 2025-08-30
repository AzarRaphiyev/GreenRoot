import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import '../css/teamWorkSlider.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';


function TeamWorkSlider() {
  return (
<>
      <Swiper
         navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        loop={true}
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
       
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
       <SwiperSlide>
  <div
    className="w-[392px] h-[468px] rounded-[36px] opacity-100"
    style={{
      backgroundImage: "url('/assets/img/teamWork1.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  ></div>
</SwiperSlide>

<SwiperSlide>
  <div
    className="w-[392px] h-[468px] rounded-[36px] opacity-100"
    style={{
      backgroundImage: "url('/assets/img/teamWork2.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  ></div>
</SwiperSlide>

<SwiperSlide>
  <div
    className="w-[392px] h-[468px] rounded-[36px] opacity-100"
    style={{
      backgroundImage: "url('/assets/img/teamWork3.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  ></div>
</SwiperSlide>

      </Swiper>
</>  
    )
}

export default TeamWorkSlider