import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../css/hedefler.css';

// import required modules
import { Navigation } from 'swiper/modules';

function Hedefler() {
  return (
    <div id='hedef_sec'>

    <Swiper navigation={true} modules={[Navigation]} className="mySwipery rounded-[36px] mt-20">
      <SwiperSlide className='overflow-hidden rounded-[36px] w-[90%]'>
      <div className="relative w-full md:h-[648px] h-[400px] bg-[url('/assets/img/hedefler1.jpg')] bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50" />
      <div className='absolute flex flex-col gap-[10px] md:w-[90%] w-[95%] md:bottom-25 bottom-8 left-[50%] translate-x-[-50%] text-left '>
      <div className='flex flex-col gap-[8px] md:w-[552px] w-full'>
        <h3 className='md:text-[30px] text-[20px] text-white md:leading-[36px] leading-[24px] poppins-regular'>Komandamızın 1 İl üçün Hədəfləri</h3>
        <p className='md:text-[12px] text-[11px] md:leading-[16px] leading-[14px] md:w-[85vw] w-full poppins-regular text-white/60'>Məqsədimiz ilk il ərzində fərdi və korporativ bağışlarla minlərlə ağacın əkilməsini təmin etmək, yaşıl əraziləri artırmaq və şəhərlərdə ekoloji tarazlığı gücləndirməkdir. İnsanların sevdiklərinin xatirəsinə ağac əkməsi üçün xüsusi xatirə bağları yaradılacaq. Bu məkanlar həm ziyarət, həm də istirahət üçün nəzərdə tutulacaq. Əkilən ağacların izlənməsi üçün QR kod əsaslı sistemin daha da inkişaf etdirilməsi və istifadəçilərə ağaclarının böyüməsini onlayn izləmək imkanı verilməsi planlaşdırılır.</p>
      </div>   
      <button className='md:text-[18px] text-[14px] hover:scale-101 duration-300 text-white md:leading-[24px] leading-[20px] flex gap-[10px] items-center '>
        <p>Ətraflı oxu</p> 
        <p>🠖</p>
      </button> 
        </div>

    </div>
      </SwiperSlide>
      <SwiperSlide className='bg-red-50'></SwiperSlide>
    </Swiper>
    </div>
  
)
}

export default Hedefler