import React from 'react'
import MainPageBanner from '../components/MainPageBanner'
import CountSec from '../components/CountSec'
import SelectMap from '../components/SelectMap'
import MainBySec from '../components/MainBySec'
import Infosec from '../components/Infosec'
import GallerySec from '../components/GallerySec'
import ProfileSec from '../components/ProfileSec'

function Home() {
  return (
    <div className='overflow-hidden'>
    <MainPageBanner/>
    <CountSec/>
    <SelectMap/>
    <MainBySec/>
    <Infosec/>
    <GallerySec/>
    <ProfileSec/>
    </div>
  )
}

export default Home