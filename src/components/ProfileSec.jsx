import React from 'react'

function ProfileSec() {
  return (
    <div className='container2 mx-auto md:h-[90vh] h-auto relative md:pb-0 pb-16 px-4 md:px-0'>   

        {/* Mobile-da bu card yuxarıda, desktop-da ortada */}
        <div className='md:absolute md:left-[45%] relative md:w-[450px] w-full max-w-[650px] mx-auto md:mx-0 md:h-[640px] h-[500px] rounded-2xl shadow-[0px_9px_19.2px_10px_rgba(0,0,0,0.08)] py-[15px] md:mb-0 mb-8'>
            <div className='flex gap-[12px] px-[10px]' >
                <img className='md:w-[50px] md:h-[50px] w-[40px] h-[40px] rounded-[50%] object-center' src="/assets/img/profilTubnail1.jpg"  alt="" />
                <div>
                    <p className="poppins-regular text-[#000]/60 md:text-[16px] text-[14px] leading-[24px] tracking-normal">alya_xn</p>
                    <p className="poppins-regular text-[#000]/38 md:text-[12px] text-[11px] leading-[28px] tracking-normal">Baku</p>
                </div>
            </div>
            <div className="md:h-[499px] h-[380px] overflow-hidden ">
                <img 
                    className="w-full h-full object-cover"
                    src="/assets/img/profilimg1.jpg"
                    alt=""
                />
            </div>
            <div className='flex justify-between my-2 px-2'>
            <div className='flex gap-2'>
            <img className='md:w-[24px] w-[20px]' src="/assets/img/like.png" alt="" />
            <img className='md:w-[24px] w-[20px]' src="/assets/img/comment.png" alt="" />
            <img className='md:w-[24px] w-[20px]' src="/assets/img/send.png" alt="" />
            </div>
            <div>
            <img className='md:w-[24px] w-[20px]' src="/assets/img/save.png" alt="" />
            </div>
            </div>
        </div>

        {/* Mobile-da bu card aşağıda, desktop-da solda */}
        <div className='md:absolute md:top-30 md:left-[12%] relative md:w-[514px] w-full py-5 px-5 flex flex-col gap-5 rounded-[36px] bg-[#FFFFFF0F] backdrop-blur-[100px] shadow-[0px_4px_30.1px_0px_#0000001A]'>
            <div className='flex md:gap-[23px] gap-[16px] items-center ' >
                    <img className='md:w-[50px] md:h-[50px] w-[40px] h-[40px] rounded-[50%] object-center' src="/assets/img/profilTubnail1.jpg"  alt="" />
                    <div>
                        <p className="poppins-regular text-[#000]/60 md:text-[14px] text-[13px] leading-[24px] tracking-normal">alya_xn</p>
                        <p className="poppins-regular text-[#000]/38 md:text-[12px] text-[11px] leading-[28px] tracking-normal">Baku</p>
                        <div className='flex gap-1'>
                            <img className='md:w-[14px] md:h-[14px] w-[12px] h-[12px]' src="/assets/img/yarpaq.png" alt="" />
                            <img className='md:w-[14px] md:h-[14px] w-[12px] h-[12px]' src="/assets/img/yarpaq.png" alt="" />
                            <img className='md:w-[14px] md:h-[14px] w-[12px] h-[12px]' src="/assets/img/yarpaq.png" alt="" />
                            <img className='md:w-[14px] md:h-[14px] w-[12px] h-[12px]' src="/assets/img/yarpaq.png" alt="" />
                            <img className='md:w-[14px] md:h-[14px] w-[12px] h-[12px] opacity-60' src="/assets/img/yarpaq.png" alt="" />
                        </div>
                    </div>
            </div>
            <div>
                <p className='text-[#000]/60 md:text-[16px] text-[14px] md:leading-[20px] leading-[18px]'>
                Mənim üçün "Yaşıl Kök" sadəcə bir layihə deyil. Bu, dünyadan köçmüş nənəmlə bağımı qoruyan bir yoldur. Onun ən çox sevdiyi yer bağça idi, torpağın qoxusunu duymaq, ağacların kölgəsində oturmaq...
                Nənəmin vəfatından sonra içimdəki boşluğu necə dolduracağımı bilmirdim. Ta ki, "Yaşıl Kök"lə tanış olana qədər. Bu layihə vasitəsilə onun adına bir ağac əkdim. İndi o ağac böyüdükcə sanki nənəmin xatirəsi də mənimlə böyüyür. Hər dəfə ora getdiyimdə, sanki onunla danışıram.
                Ona toxunmaq mümkün deyil bəlkə, amma ağaca toxunmaqla ruhunu hiss edirəm.Yaşıl Kök mənə təkcə ağac deyil, xatirə bağışladı. 💚
                </p>
            </div>
        </div>


    </div>
  )
}

export default ProfileSec