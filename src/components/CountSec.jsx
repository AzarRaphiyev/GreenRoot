import React from 'react'

function CountSec() {
  return (
    <div className='container2 mx-auto my-15 flex-col lg:flex-row xl:flex-row gap-5  flex justify-between items-center '>

<div className='flex  items-center'>
  <div 
    className="w-[100px] h-[80px] bg-no-repeat bg-contain  " 
    style={{ 
      backgroundImage: "url('/assets/img/agac.png')", 
      backgroundPosition: "-165px -155px", // göstərmək istədiyin hissəyə görə dəyiş
      backgroundSize: "400px 400px" // orijinal ölçüyə görə uyğunlaşdır
    }}>
  </div>

    <div>
        <p className='poppins-regular text-[30px] leading-[36px]'>253</p>
        <p className='poppins-regular text-[14px] leading-[20px] opacity-60'>Bu gün əkilən ağac sayı</p>
    </div>

    </div>

<div className='flex items-center'>
  <div 
    className="w-[100px] h-[80px] bg-no-repeat bg-contain  " 
    style={{ 
      backgroundImage: "url('/assets/img/agac.png')", 
      backgroundPosition: "-40px -35px", // göstərmək istədiyin hissəyə görə dəyiş
      backgroundSize: "400px 400px" // orijinal ölçüyə görə uyğunlaşdır
    }}>
  </div>

    <div>
        <p className='poppins-regular text-[30px] leading-[36px]'>3.654</p>
        <p className='poppins-regular text-[14px] leading-[20px] opacity-60'>Bu ay əkilən ağac sayı</p>
    </div>

    </div>
<div className='flex items-center'>
  <div 
    className="w-[100px] h-[80px] bg-no-repeat bg-contain  " 
    style={{ 
      backgroundImage: "url('/assets/img/agac.png')", 
      backgroundPosition: "-285px -155px", // göstərmək istədiyin hissəyə görə dəyiş
      backgroundSize: "400px 400px" // orijinal ölçüyə görə uyğunlaşdır
    }}>
  </div>

    <div>
        <p className='poppins-regular text-[30px] leading-[36px]'>24.000</p>
        <p className='poppins-regular text-[14px] leading-[20px] opacity-60'>Bu il əkilən ağac sayı</p>
    </div>

    </div>

        
    </div>
  )
}

export default CountSec