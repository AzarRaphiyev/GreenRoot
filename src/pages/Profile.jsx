import React from 'react'
import ProfilInfo from '../components/ProfilInfo'
import ProfilTreeForm from '../components/ProfilTreeForm'
import Infosec from '../components/Infosec'

function Profile() {
  return (
    <div className='py-[80px]'>
      <div
          className="w-full h-[355px] mb-10 relative"
          style={{
            backgroundImage: "url('/assets/img/profilBanner.jpg')",
            backgroundPosition: "0px -1000px",
            backgroundSize: "cover", // şəkil tam doldursun
          }}
        >
        
        <div className="absolute inset-0 bg-black/40 rounded-[inherit]"></div>
      
          

      </div>
      <ProfilInfo />
      <ProfilTreeForm/>
      <Infosec/>


           
  </div>

    
  )
}

export default Profile