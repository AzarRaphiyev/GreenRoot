import React from 'react'
import AboutTeamImg from '../components/AboutTeamImg'
import AboutTeamText from '../components/AboutTeamText'
import TeamWorkSlider from '../components/TeamWorkSlider'
import BizeQosul from '../components/BizeQosul'
import Hedefler from '../components/Hedefler'

function Haqqimizda() {
  return (
    <div className='py-[80px] overflow-hidden '>
        <AboutTeamImg/>
        <AboutTeamText/>
        <TeamWorkSlider/>
        <Hedefler/>
        <BizeQosul/>
    </div>
  )
}

export default Haqqimizda