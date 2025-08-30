import React from 'react'

function MainPageBanner() {
  return (
    <div 
        className="md:h-[697px] h-[500px] bg-no-repeat bg-cover bg-center relative" 
        style={{ backgroundImage: "url('/assets/img/mainPageBanner.jpg')" }}
        >

        <div className='md:px-[24px] px-[16px] absolute top-[50%] translate-y-[-50%] flex flex-col md:gap-[32px] gap-[24px] w-full md:w-auto'>
            <h1 className='md:text-[46px] text-[28px] poppins-medium text-white md:w-[500px] w-[90%] md:leading-[56px] leading-[34px]'>Hər fidan bir xatirə, hər xatirə bir həyat.</h1>
            <button className='bg-[#157424] rounded-[8px] md:w-[208px] w-[180px] md:h-[56px] h-[48px] text-white poppins-semibold'>
                <p className='text-white poppins-semibold md:w-[100px] w-auto mx-auto md:text-[16px] text-[14px]'>İndi ağac ək</p>
            </button>
        </div>    

</div>

  )
}

export default MainPageBanner