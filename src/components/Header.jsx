import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Aktiv link-i yoxlamaq üçün funksiya
  const isActiveLink = (path) => {
    return location.pathname === path;
  }

  // Menu açıb-bağlama funksiyası
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // Menu linkine basıldığında menunu bağlayır
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <>
      <div className='bg-[#157424] fixed z-[100] w-[100vw]'>
        <div className='flex items-center justify-between container2 mx-auto h-[80px] p-[12px]'>
          
          {/* Mobile burger menu - sadece md və aşağısında görünür */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white'>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Logo - mobilde ortada, desktopda solda */}
          <Link to={"/"} className='md:order-first order-none'>
            <img className='w-[60px] h-[60px]' src="../assets/logo.png" alt="" />
          </Link>
          
          {/* Desktop navigation - sadece md və yuxarısında görünür */}
          <div className='hidden md:block'>
            <ul className='flex gap-[24px] text-white'>
              <li className={`hover:opacity-100 duration-300 poppins-regular text-[16px] ${
                isActiveLink('/') ? 'opacity-100 text-white' : 'opacity-60 text-white'
              }`}>
                <Link to={"/"}>Ana səhifə</Link>
              </li>
              
              <li className={`hover:opacity-100 duration-300 poppins-regular text-[16px] ${
                isActiveLink('/xerite') ? 'opacity-100 text-white' : 'opacity-60 text-white'
              }`}>
                <Link to={'/xerite'}>Xəritə</Link>
              </li>
              
              <li className={`hover:opacity-100 duration-300 poppins-regular text-[16px] ${
                isActiveLink('/haqqımızda') ? 'opacity-100 text-white' : 'opacity-60 text-white'
              }`}>
                <Link to={"/haqqımızda"}>Haqqımızda</Link>
              </li>
              
              <li className={`hover:opacity-100 duration-300 poppins-regular text-[16px] ${
                isActiveLink('/blog') ? 'opacity-100 text-white' : 'opacity-60 text-white'
              }`}>
                <Link to={"/blog"}>Blog</Link>
              </li>
              
              <li className='text-white hover:opacity-100 duration-300 opacity-60 poppins-regular text-[16px] active:opacity-100'>
                <Link>Əlaqə</Link>
              </li>
            </ul>
          </div>
          
          {/* Basket və User icons - həmişə sağda */}
          <div className='flex gap-[12px]'>
            <Link>
              <img className='w-[24px] h-[24px]' src="../assets/img/basket.png" alt="" />
            </Link>
            <Link to={"/mənimhesabım"}>
              <img className='w-[24px] h-[24px]' src="../assets/img/user.png" alt="" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu - yarım ekran genişliğində soldan açılır */}
      <div className={`fixed top-0 left-0 h-full w-1/2 bg-[#157424] z-[200] transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:hidden`}>
        
        {/* Menu header */}
        <div className='flex items-center justify-between p-4 border-b border-white/20'>
          <img className='w-[40px] h-[40px]' src="../assets/logo.png" alt="" />
          <button onClick={toggleMenu} className='text-white'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu links */}
        <div className='p-4'>
          <ul className='space-y-6 text-white'>
            <li className={`poppins-regular text-[18px] ${
              isActiveLink('/') ? 'opacity-100 text-white' : 'opacity-60 text-white'
            }`}>
              <Link to={"/"} onClick={closeMenu} className='block hover:opacity-100 duration-300'>Ana səhifə</Link>
            </li>
            
            <li className={`poppins-regular text-[18px] ${
              isActiveLink('/xerite') ? 'opacity-100 text-white' : 'opacity-60 text-white'
            }`}>
              <Link to={'/xerite'} onClick={closeMenu} className='block hover:opacity-100 duration-300'>Xəritə</Link>
            </li>
            
            <li className={`poppins-regular text-[18px] ${
              isActiveLink('/haqqımızda') ? 'opacity-100 text-white' : 'opacity-60 text-white'
            }`}>
              <Link to={"/haqqımızda"} onClick={closeMenu} className='block hover:opacity-100 duration-300'>Haqqımızda</Link>
            </li>
            
            <li className={`poppins-regular text-[18px] ${
              isActiveLink('/blog') ? 'opacity-100 text-white' : 'opacity-60 text-white'
            }`}>
              <Link to={"/blog"} onClick={closeMenu} className='block hover:opacity-100 duration-300'>Blog</Link>
            </li>
            
            <li className='text-white opacity-60 poppins-regular text-[18px]'>
              <Link onClick={closeMenu} className='block hover:opacity-100 duration-300'>Əlaqə</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay - menu açıq olduğunda arxa planı qaraldır */}
      {isMenuOpen && (
        <div 
          className='fixed inset-0 bg-black/50 z-[150] md:hidden'
          onClick={toggleMenu}
        ></div>
      )}
    </>
  )
}

export default Header