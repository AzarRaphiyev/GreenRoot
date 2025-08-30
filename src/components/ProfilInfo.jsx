import React from 'react'
import ProfilSlider from './ProfilSlider'

function ProfilInfo() {
  return (
    <div className='container2 mx-auto  h-[100vh]'>

        <div className="absolute px-6 py-10 flex-col w-[392px] h-[590px] top-[329px] left-[24px] rounded-[24px] gap-[24px] bg-[#FFFFFF0F] backdrop-blur-[100px] shadow-[0px_4px_4px_0px_#00000040] flex ">
        <img
            className="w-[300px] mx-auto h-[300px] rounded-full object-cover"
            src="/assets/img/nazrinMamadova.jpg"
            alt=""
        />

        <h3 className="poppins-regular text-[#000000DE] text-[30px] leading-[36px] tracking-[0%] text-center">
            Nərgiz Məmmədova
        </h3>

        <div className='flex flex-col gap-[12px]'>
            <div className="flex gap-1 ">
                <img className="w-[14px] h-[14px]" src="/assets/img/yarpaq.png" alt="" />
                <img className="w-[14px] h-[14px]" src="/assets/img/yarpaq.png" alt="" />
                <img className="w-[14px] h-[14px]" src="/assets/img/yarpaq.png" alt="" />
                <img className="w-[14px] h-[14px]" src="/assets/img/yarpaq.png" alt="" />
                <img className="w-[14px] h-[14px] opacity-60" src="/assets/img/yarpaq.png" alt="" />
            </div >
            <div className=' flex flex-col gap-[12px] text-[#000]/60'>
            <p className='text-[14px] leading-[20px] tracking-[0%]'>Ağacının adı :  <span className='text-[18px] leading-[24px] tracking-[0%]'>Uğur</span></p>
            <p className='text-[14px] leading-[20px] tracking-[0%]'>Ağacının nömrəsi : <span className='text-[18px] leading-[24px] tracking-[0%]'>1001</span></p>
            <p className='text-[14px] leading-[20px] tracking-[0%]'>Ağacın yerləşdiyi ərazi : <span className='text-[18px] leading-[24px] tracking-[0%]'>Xatirə parkı 1 ərazisi</span></p>
            </div>
        </div>

        </div>
        <div className='absolute top-[60%] left-[32%]   w-[65%]'>
            <ProfilSlider/>
        </div>



    </div>
  )
}

export default ProfilInfo