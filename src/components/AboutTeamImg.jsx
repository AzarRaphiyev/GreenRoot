import React from 'react'

function AboutTeamImg() {
  return (
    <div className='h-[75vh] min-h-[600px] py-4 md:py-10 relative '>
      {/* Komanda şəkilləri */}
      <div className="relative flex justify-center items-center pt-[180px] sm:pt-[220px] md:pt-[250px]">
        <img
          className="absolute w-[200px] sm:w-[280px] md:w-[360px] 
                     top-6 sm:top-8 md:top-10 
                     h-[280px] sm:h-[400px] md:h-[510px] 
                     object-cover rounded-[20px] sm:rounded-[28px] md:rounded-[36px] 
                     -rotate-6 
                     -translate-x-32 sm:-translate-x-64 md:-translate-x-128 
                     z-10 shadow-lg"
          src="/assets/img/komondo3.jpg"
          alt="Team member"
        />
        <img
          className="absolute w-[200px] sm:w-[280px] md:w-[360px] 
                     top-3 sm:top-4 md:top-5 
                     h-[280px] sm:h-[400px] md:h-[510px] 
                     object-cover rounded-[20px] sm:rounded-[28px] md:rounded-[36px] 
                     -rotate-3 
                     -translate-x-16 sm:-translate-x-32 md:-translate-x-64 
                     z-20 shadow-lg"
          src="/assets/img/komondo2.jpg"
          alt="Team member"
        />
        <img
          className="absolute w-[200px] sm:w-[280px] md:w-[360px] 
                     scale-105 
                     h-[280px] sm:h-[400px] md:h-[510px] 
                     object-cover rounded-[20px] sm:rounded-[28px] md:rounded-[36px] 
                     z-30 shadow-lg 
                     top-2 sm:top-3 md:top-4"
          src="/assets/img/komondo1.jpg"
          alt="Team member"
        />
        <img
          className="absolute w-[200px] sm:w-[280px] md:w-[360px] 
                     top-3 sm:top-4 md:top-5 
                     h-[280px] sm:h-[400px] md:h-[510px] 
                     object-cover rounded-[20px] sm:rounded-[28px] md:rounded-[36px] 
                     rotate-3 
                     translate-x-16 sm:translate-x-32 md:translate-x-64 
                     z-20 shadow-lg"
          src="/assets/img/komondo4.jpg"
          alt="Team member"
        />
        <img
          className="absolute w-[200px] sm:w-[280px] md:w-[360px] 
                     top-6 sm:top-8 md:top-10 
                     h-[280px] sm:h-[400px] md:h-[510px] 
                     object-cover rounded-[20px] sm:rounded-[28px] md:rounded-[36px] 
                     rotate-6 
                     translate-x-32 sm:translate-x-64 md:translate-x-128 
                     z-10 shadow-lg"
          src="/assets/img/komondo5.jpg"
          alt="Team member"
        />
      </div>

      {/* Dekor 1 - Sağ üst */}
      <div
        className="absolute 
                   right-[10px] sm:right-[20px] md:right-[25px] 
                   top-[-60px] sm:top-[-90px] md:top-[-120px] 
                   z-[-4] 
                   w-[200px] sm:w-[280px] md:w-[340px] 
                   h-[300px] sm:h-[400px] md:h-[500px] 
                   opacity-20 sm:opacity-25 md:opacity-30 
                   scale-x-[-1] 
                   rotate-[-73deg] 
                   overflow-hidden"
        style={{
          backgroundImage: "url('/assets/img/decor.jpg')",
          backgroundPosition: "-556px -130px",
          backgroundSize: "1200px 1200px",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Dekor 2 - Sol alt */}
      <div
        className="absolute 
                   left-[-5px] sm:left-[-8px] md:left-[-10px] 
                   bottom-[-150px] sm:bottom-[-200px] md:bottom-[-250px] 
                   z-[-4] 
                   w-[200px] sm:w-[280px] md:w-[340px] 
                   h-[300px] sm:h-[400px] md:h-[500px] 
                   opacity-20 sm:opacity-25 md:opacity-30 
                   scale-y-[1] 
                   rotate-[-243deg] 
                   overflow-hidden"
        style={{
          backgroundImage: "url('/assets/img/decor.jpg')",
          backgroundPosition: "-556px -130px",
          backgroundSize: "1200px 1200px",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  )
}

export default AboutTeamImg