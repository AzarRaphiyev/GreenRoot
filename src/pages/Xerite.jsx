import React from 'react'
import XeriteSlider from '../components/XeriteSlider'
import TreeForm from '../components/TreeForm'
import Infosec from '../components/Infosec'
import EnCoxAgacEkenler from '../components/EnCoxAgacEkenler'
import Map from '../components/Map'

function Xerite() {
  return (
    <div className='py-[80px] overflow-hidden'>
        <XeriteSlider/>
        <Map/>  
        <EnCoxAgacEkenler/>
        <TreeForm/>
        <Infosec/>
    </div>
  )
}

export default Xerite