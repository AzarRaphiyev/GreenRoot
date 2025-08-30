import React from 'react'

function BizeQosul() {
  return (
    <div>
      <div className='relative overflow-hidden'>
        <div className='container2 mx-auto my-25 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 px-4 sm:px-6 lg:px-0'>
          
          <div className='w-full lg:w-auto flex justify-center'>
            <img
              className='w-full max-w-[400px] sm:max-w-[500px] lg:w-[600px] 
                         h-[280px] sm:h-[350px] lg:h-[421px] 
                         rounded-[24px] sm:rounded-[30px] lg:rounded-[36px] 
                         object-cover'
              src="/assets/img/bizeQosul.jpg"
              alt="Bizə qoşul"
            />
          </div>
       
          <div className='w-full lg:w-[600px] flex flex-col gap-6 sm:gap-8 lg:gap-[33px] text-center lg:text-left'>
            <div className='flex flex-col gap-3 sm:gap-4 lg:gap-[15px]'>
              <h3 className='poppins-regular text-[24px] sm:text-[28px] lg:text-[30px] leading-[28px] sm:leading-[34px] lg:leading-[36px] opacity-60'>
                Səndə bizə qoşul !
              </h3>
              <p className='poppins-regular text-[14px] sm:text-[14px] lg:text-[14px] leading-[20px] sm:leading-[22px] lg:leading-[24px] text-[#737272] max-w-[500px] mx-auto lg:mx-0'>
                Sən də təbiətə töhfə ver! Bizim kamandamıza qoşul və dünyamızı yaşıllaşdırmaqda bizimlə birlikdə çalış .
              </p>
            </div>   
            
            <div className='flex gap-[12px]'>
              <button className='poppins-semibold text-[16px] leading-[24px] text-white bg-[#157424] rounded-[8px] w-full lg:w-[600px] h-[56px] hover:bg-[#125a1e] transition-colors duration-200'>
                Qoşul
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BizeQosul