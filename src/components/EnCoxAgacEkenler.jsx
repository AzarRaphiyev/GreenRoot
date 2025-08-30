import React from 'react'

function EnCoxAgacEkenler() {
  return (
    <div className="bg-[#0F521A] mt-10 p-10">
  {/* Başlıq */}
  <div className="w-[250px] mx-auto flex flex-col items-center justify-center">
    <h3 className="text-[24px] leading-[32px] text-white poppins-regular">
      Ən çox ağac Əkənlər
    </h3>
    <p className="text-[14px] leading-[16px] text-white/60 poppins-regular">
      Xatirə Parkı 1/2
    </p>
  </div>

  {/* Kartlar */}
  <div className="my-5 flex gap-6 overflow-x-auto scrollbar-none justify-between">
    {/* 1-ci */}
    <div className="flex-shrink-0 flex flex-col gap-5 w-[288px]">
      <img
        className="w-[288px] h-[243px] rounded-[36px] object-cover"
        src="/assets/img/encoxalan4.jpg"
        alt=""
      />
      <div className="flex flex-col gap-1 items-center justify-center">
        <h3 className="text-[16px] leading-[20px] poppins-regular text-white">
          Səmra Hüseynova
        </h3>
        <p className="text-[14px] leading-[20px] poppins-regular text-white/60">
          10 ağac əkib
        </p>
        <p className="text-[14px] leading-[20px] poppins-regular text-white/60">
          “ Hər fidan bir həyat hekayəsidir. ”
        </p>
      </div>
    </div>

    {/* 2-ci */}
    <div className="flex-shrink-0 flex flex-col gap-5 w-[288px]">
      <img
        className="w-[288px] h-[243px] rounded-[36px] object-cover"
        src="/assets/img/encoxalan3.jpg"
        alt=""
      />
      <div className="flex flex-col gap-1 items-center justify-center">
        <h3 className="text-[16px] leading-[20px] poppins-regular text-white">
          Banu Xankişiyeva
        </h3>
        <p className="text-[14px] leading-[20px] poppins-regular text-white/60">
          5 ağac əkib
        </p>
        <p className="text-[14px] leading-[20px] poppins-regular text-white/60">
          “ Xərçəngdən əziyyət çəkən dostlarım üçün. ”
        </p>
      </div>
    </div>

    {/* 3-cü */}
    <div className="flex-shrink-0 flex flex-col gap-5 w-[288px]">
      <img
        className="w-[288px] h-[243px] rounded-[36px] object-cover"
        src="/assets/img/encoxalan1.jpg"
        alt=""
      />
      <div className="flex flex-col gap-1 items-center justify-center">
        <h3 className="text-[16px] leading-[20px] poppins-regular text-white">
          Süleyman Muxdarova
        </h3>
        <p className="text-[14px] leading-[20px] poppins-regular text-white/60">
          7 ağac əkib
        </p>
        <p className="text-[14px] leading-[20px] poppins-regular text-white/60">
          “ Hərbidə itirdiyim 7 dostum üçün. “
        </p>
      </div>
    </div>

    {/* 4-cü */}
    <div className="flex-shrink-0 flex flex-col gap-5 w-[288px]">
      <img
        className="w-[288px] h-[243px] rounded-[36px] object-cover"
        src="/assets/img/encoxalan2.jpg"
        alt=""
      />
      <div className="flex flex-col gap-1 items-center justify-center">
        <h3 className="text-[16px] leading-[20px] poppins-regular text-white">
          Xədicə Əliyeva
        </h3>
        <p className="text-[14px] leading-[20px] poppins-regular text-white/60">
          11 ağac əkib
        </p>
        <p className="text-[14px] leading-[20px] poppins-regular text-white/60">
          “ Şagirdlərimə yaşıl bir gələcək bəxşetmək üçün. “
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default EnCoxAgacEkenler