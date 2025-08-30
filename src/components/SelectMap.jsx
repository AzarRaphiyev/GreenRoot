import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

function SelectMap() {
  return (
    <div className="container2 mx-auto mt-20 flex flex-col lg:flex-row xl:flex-row gap-5 justify-between">

  {/* Kart 1 */}
  <div
    className="w-full max-w-[600px] h-[220px] md:h-[355px] rounded-[20px] md:rounded-[32px] relative overflow-hidden"
    style={{
      backgroundImage: "url('/assets/img/selectMapCut1.png')",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  >
    {/* Gradient overlay */}
    <div className="absolute inset-0 xl:top-42 top-28">
      <img src="/assets/img/shadowSelectMap.png" alt="" className=" object-cover" />
    </div>

    {/* Text hissəsi */}
    <div className="absolute bottom-4 left-4 md:bottom-5 md:left-6">
      <h3 className="text-white text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] font-normal mb-1">
        Xatirə Parkı 1 ərazisi
      </h3>
      <p className="text-white text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] font-normal opacity-70">
        Ünvan : Sahil parkı
      </p>
    </div>

    {/* Ox düyməsi */}
    <div className="absolute xl:bottom-2 bottom-1 right-[-3px]  md:bottom-2 md:right-4 px-5 md:px-7 h-[36px] md:h-[40px] border border-gray-200 bg-white rounded-full flex items-center justify-center">
      <FaLongArrowAltRight size={18} className="text-gray-500 md:text-[20px]" />
    </div>
  </div>

  {/* Kart 2 */}
  <div
    className="w-full max-w-[600px] h-[220px] md:h-[355px] rounded-[20px] md:rounded-[32px] relative overflow-hidden"
    style={{
      backgroundImage: "url('/assets/img/selectMapCut2.png')",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  >
    <div className="absolute inset-0 xl:top-42 top-28">
      <img src="/assets/img/shadowSelectMap.png" alt="" className=" object-cover" />
    </div>

    {/* Text hissəsi */}
    <div className="absolute bottom-4 left-4 md:bottom-5 md:left-6">
      <h3 className="text-white text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] font-normal mb-1">
        Xatirə Parkı 2 ərazisi
      </h3>
      <p className="text-white text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] font-normal opacity-70">
        Ünvan : Sahil parkı
      </p>
    </div>

    <div className="absolute bottom-1 xl:bottom-0  right-[-3px]  md:bottom-2 md:right-4 px-5 md:px-7 h-[36px] md:h-[40px] border border-gray-200 bg-white rounded-full flex items-center justify-center">
      <FaLongArrowAltRight size={18} className="text-gray-500 md:text-[20px]" />
    </div>
  </div>

</div>

  )
}

export default SelectMap