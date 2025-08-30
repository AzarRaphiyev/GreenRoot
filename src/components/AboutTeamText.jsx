import React from 'react'

function AboutTeamText() {
  return (
    <div className='w-[1016px] max-w-full mx-auto flex flex-col my-30 gap-[32px] justify-center items-center px-4 sm:px-6 lg:px-0'>
    <h3 className='text-[24px] sm:text-[28px] lg:text-[30px] leading-[28px] sm:leading-[34px] lg:leading-[36px] poppins-regular text-[#000]/87 text-center'>
      Komandamız Haqqında
    </h3>
    
    <div className='flex flex-col gap-3 sm:gap-2 lg:gap-1'>
      <p className='text-[16px] sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[23px] lg:leading-[24px] poppins-regular text-[#000]/60 text-center lg:text-left'>
        Yaşıl Kök komandası olaraq məqsədimiz təkcə ağac əkmək deyil, gələcək nəsillərə nəfəs ala biləcəkləri yaşıl bir dünya buraxmaqdır. Biz insanların təbiətlə olan bağını gücləndirmək, xatirələrini yaşadan ağaclarla dolu məkanlar yaratmaq üçün bir araya gəlmişik.
      </p>
      
      <p className='text-[16px] sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[23px] lg:leading-[24px] poppins-regular text-[#000]/60 text-center lg:text-left'>
        Komandamız müxtəlif sahələrdən olan, ekologiyanı sevən, sosial təsir yaratmaq istəyən könüllülərdən və mütəxəssislərdən ibarətdir. Biz birgə çalışaraq şəhərlərin yaşıllaşdırılmasına, ətraf mühitin qorunmasına və insanların ekoloji məsuliyyət daşımasına töhfə veririk.
      </p>
    </div>
  </div>
  )
}

export default AboutTeamText