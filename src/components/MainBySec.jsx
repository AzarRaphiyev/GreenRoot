import React from 'react'

function MainBySec() {
  return (

 <div className='relative overflow-hidden'>
       <div className='container2 mx-auto md:my-25 my-16 md:flex  md:items-center md:justify-between flex-col md:flex-row gap-5 flex px-4 md:px-0'>
       <div className='flex justify-center  items-center mt-10'>
         <img
           className='md:w-[600px] w-[600px]  md:h-[730px] h-[400px] rounded-[36px] object-cover'
           src="/assets/img/mainBy.jpg"
           alt=""
         />
       </div>
    
       <div className='md:w-[600px] w-full flex flex-col md:gap-[33px] gap-[24px] text-center md:text-left'>
           <div className='flex flex-col md:gap-[15px] gap-[12px]'>
                   <h3 className='poppins-regular md:text-[30px] text-[22px] md:leading-[36px] leading-[28px] opacity-60'>Yaşıl gələcək, bir klik uzaqda.</h3>
                   <p className='poppins-regular md:text-[14px] text-[13px] md:leading-[24px] leading-[20px] text-[#737272]'>Sən də təbiətə töhfə ver! Bu gün bir ağac bağışlayaraq dünyamızı daha yaşıl və nəfəsalıcı edə bilərsən. Gələcəyimiz üçün bir toxum ək və xatirəni əbədiləşdir.</p>
               
           </div>   
           <div className='flex md:gap-[12px] gap-[8px] md:flex-row flex-col'>
                   <button className='poppins-semibold md:text-[16px] text-[14px] md:leading-[24px] leading-[20px] text-white bg-[#157424] rounded-[8px] md:w-[392px] w-full md:h-[56px] h-[48px]'>
                       İndi al
                   </button>
                   <button className='poppins-semibold rounded-[8px] md:text-[16px] text-[14px] md:leading-[24px] leading-[20px] text-[#0F521A] border-1 border-[#0F521A] md:h-[56px] h-[48px] md:w-[184px] w-full'>
                       Ətraflı
                   </button>
               </div>
       </div>
    
    
    
    
    
    
    
     </div>
       <div
         className="absolute md:right-[35px] right-[10px] md:top-[-100px] top-[-50px] z-[-4] md:w-[340px] w-[200px] md:h-[500px] h-[300px] md:opacity-30 opacity-20 scale-x-[-1] md:rotate-[-69deg] rotate-[-45deg]"
         style={{
           backgroundImage: "url('/assets/img/decor.jpg')",
           backgroundPosition: "-556px -130px",
           backgroundSize: "1200px 1200px",   // şəkil div-i doldursun
           backgroundRepeat: "no-repeat", // təkrar olmasın
         }}
       ></div>
 </div>
  
  )
}

export default MainBySec