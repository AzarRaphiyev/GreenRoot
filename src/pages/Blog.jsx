import React from 'react'
import Bloglar from '../components/Bloglar'

function Blog() {
  return (
    <div className='pt-[80px] ' >
        <div className='w-full h-[355px] mb-10' style={
{        backgroundImage: "url('/assets/img/blogBanner.jpg')",
        backgroundPosition: "0 1000px",
        backgroundSize: "1600px 1500px",

}        
}>
            <div className='absolute left-[50%] flex flex-col items-center justify-center gap-7 translate-x-[-50%] top-[30%] translate-y-[-50%]'>
            <h3 className="poppins-regular text-[34px] text-white leading-[44px] tracking-[0] text-center">
            Hər fidan bir həyat hekayəsidir.
            </h3>
            <button className="poppins-semibold text-[16px] leading-[24px] tracking-[0] 
            w-[208px] h-[56px] rounded-[8px] px-[24px] bg-[#157424] text-white opacity-100">
            Hekayəni yaz
            </button>


            </div>
        </div>

        <Bloglar/>

    </div>
  )
}

export default Blog