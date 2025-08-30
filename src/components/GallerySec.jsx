import React from 'react'

function GallerySec() {
  return (
    <div className="my-25 flex flex-col gap-[40px]     relative ">

    {/* Başlıq */}
    <div className="w-full max-w-[40%] mx-auto flex flex-col gap-[16px]">
      <h3 className="poppins-regular text-[#000]/60 text-[24px] md:text-[30px] text-center leading-[32px] md:leading-[36px]">
        Gallery
      </h3>
      <hr className="w-full text-[#157424]" />
    </div>
  
    {/* Qalereya */}
    <div className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory px-4 md:px-0">
      <div
        className="w-[300px] md:w-[392px] h-[360px] md:h-[469px] flex-shrink-0 rounded-[24px] md:rounded-[36px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/img/galery1.png')" }}
      ></div>
  
      <div
        className="w-[300px] md:w-[392px] h-[360px] md:h-[469px] flex-shrink-0 rounded-[24px] md:rounded-[36px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/img/galery2.jpg')" }}
      ></div>
  
      <div
        className="w-[300px] md:w-[392px] h-[360px] md:h-[469px] flex-shrink-0 rounded-[24px] md:rounded-[36px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/img/galery3.png')" }}
      ></div>
  
      <div
        className="w-[300px] md:w-[392px] h-[360px] md:h-[469px] flex-shrink-0 rounded-[24px] md:rounded-[36px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/img/galery4.png')" }}
      ></div>
    </div>
  
    {/* Dekorativ şəkil */}
    <div
      className="hidden md:block absolute left-[35px] bottom-[-300px] z-[-4] w-[340px] h-[500px] opacity-30 rotate-[-249deg]"
      style={{
        backgroundImage: "url('/assets/img/decor.jpg')",
        backgroundPosition: "-556px -130px",
        backgroundSize: "1200px 1200px",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  </div>
  
  )
}

export default GallerySec