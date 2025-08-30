import React from 'react'
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter } from 'react-icons/sl'

function Footer() {
  return (
    <div className='bg-[#0F521A] '>
      <div className='container2 mx-auto py-25 flex justify-between   xl:items-start gap-10 lg:items-start items-center flex-col xl:flex-row lg:flex-row'>
        <div className='flex flex-col gap-5 justify-center items-center'>
            <img className='w-[150px]' src="/assets/logo.png" alt="" />
            <div className='flex gap-10 items-center text-[#fff]/60'>
            <SlSocialFacebook size={30} />
            <SlSocialTwitter size={30} />
            <SlSocialInstagram size={30} />
            </div>
        </div>
        
          <div className='flex flex-col gap-[4px]  xl:items-start  lg:items-start items-center '>
            <p className='text-[18px] leading-[24px] text-white/60 poppins-regular'>Ana səhifə</p>
            <p className='text-[18px] leading-[24px] text-white/60 poppins-regular'>Xəritə</p>
            <p className='text-[18px] leading-[24px] text-white/60 poppins-regular'>Haqqımızda</p>
            <p className='text-[18px] leading-[24px] text-white/60 poppins-regular'>Ağac bağışla</p>
            <p className='text-[18px] leading-[24px] text-white/60 poppins-regular'>Mənim ağaclarım</p>
          </div>
          <div className='flex flex-col gap-[4px]  xl:items-start  lg:items-start items-center'>
            <p className='text-[18px] leading-[24px] text-white/60 poppins-regular'>Bizimlə əlaqə</p>
            <p className='text-[18px] leading-[24px] text-white/60 poppins-regular'>Dəstək mərkəzi</p>
            <p className='text-[18px] leading-[24px] text-white/60 poppins-regular'>Suallar və cavablar</p>
          </div>
        
        <div className='flex flex-col gap-[4px]  xl:items-start  lg:items-start items-center'>
            <p className='text-[18px] leading-[24px] text-white/60 poppins-regular'>Email:</p>
            <p className='text-[18px] leading-[24px] text-white/60 poppins-regular'>Telefon:</p>
          </div>

      </div>
    </div>
  )
}

export default Footer