import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../css/slider.css';

import { Navigation } from 'swiper/modules';

function XeriteSlider() {
  return (
    <>
      <Swiper 
        navigation={true} 
        modules={[Navigation]} 
        className="mySwiper"
        style={{ height: '400px' }} // Slider hündürlüyü
      >
        <SwiperSlide>
        <div
  style={{
    backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('/assets/img/selectMap1.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%", // Tam hündürlük
    width: "100%",  // Tam genişlik
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}
>
    <div className='flex flex-col'>

    <div className="flex flex-col gap-[8px]">
        <p className="text-[58px] leading-[58px] text-white poppins-regular">
        Xatirə Parkı 1
        </p>
        <p className="text-[58px] leading-[58px] text-white/60 poppins-regular">
        ərazisi
        </p>
        <div>
        <p className="text-[18px] leading-[24px] text-white/60">
            Ünvan : Sahil parkı
        </p>
        <p className="text-[18px] leading-[24px] text-white/60">
            Əkilən ağac sayı : 27
        </p>
        </div>
    </div>
    

    <button className='w-[208px]  bg-[#157424] h-[56px] my-5 mx-auto rounded-[8px] text-white text-[16px] leading-[24px] poppins-semibold'>
    İndi ağac ək
    </button>
    </div>
    
</div>

        </SwiperSlide>
        
        <SwiperSlide>
        <div
            style={{
                backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('/assets/img/selectMap2.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "100%", // Tam hündürlük
                width: "100%",  // Tam genişlik
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
            >
                <div className='flex flex-col'>

                <div className="flex flex-col gap-[8px]">
                    <p className="text-[58px] leading-[58px] text-white poppins-regular">
                    Xatirə Parkı 2
                    </p>
                    <p className="text-[58px] leading-[58px] text-white/60 poppins-regular">
                    ərazisi
                    </p>
                    <div>
                    <p className="text-[18px] leading-[24px] text-white/60">
                        Ünvan : Sahil parkı
                    </p>
                    <p className="text-[18px] leading-[24px] text-white/60">
                        Əkilən ağac sayı : 27
                    </p>
                    </div>
                </div>
                

                <button className='w-[208px]  bg-[#157424] h-[56px] my-5 mx-auto rounded-[8px] text-white text-[16px] leading-[24px] poppins-semibold'>
                İndi ağac ək
                </button>
                </div>
                
            </div>

        </SwiperSlide>
        
       
      </Swiper>
    </>
  )
}

export default XeriteSlider