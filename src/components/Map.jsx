import React from 'react'

function Map() {
  return (
    <div className='h-[100vh] relative '>



        <div
         className="absolute right-[25px]  top-[-180px] z-[-4] w-[340px] h-[500px] opacity-30 scale-x-[-1] rotate-[-69deg]"
         style={{
           backgroundImage: "url('/assets/img/decor.jpg')",
           backgroundPosition: "-556px -130px",
           backgroundSize: "1200px 1200px   ",   // şəkil div-i doldursun
           backgroundRepeat: "no-repeat", // təkrar olmasın
         }}
       ></div>
        <div
         className="absolute left-[-25px]  bottom-[-200px] z-[-4] w-[340px] h-[500px] opacity-30 scale-x-[1] rotate-[49deg]"
         style={{
           backgroundImage: "url('/assets/img/decor.jpg')",
           backgroundPosition: "-556px -130px",
           backgroundSize: "1200px 1200px   ",   // şəkil div-i doldursun
           backgroundRepeat: "no-repeat", // təkrar olmasın
         }}
       ></div>
    </div>
  )
}

export default Map