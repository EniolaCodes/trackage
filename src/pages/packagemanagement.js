import React from 'react'
import Adminlayout from './adminlayout';
import Track from '../components/Track'

const Packagemanagement = () => {
  return (
    <Adminlayout>
     <div>
        <Track name="Dominos" trackingId="TKG076" deportedDate="February 25, 2024" deliveryDate="February 28, 2024" 
        currentLocation="Warehouse" status="pending"/>
        <Track name="GNL" trackingId="TKG018" deportedDate="March 12, 2024" deliveryDate="March 28, 2024" status="delivered"/>
        <Track name="BYC" trackingId="TKG092" deportedDate="March 1, 2024" deliveryDate="March 19, 2024"  status="canceled"/>
        <Track name="MMM" trackingId="TKG054" deportedDate="February 25, 2024" deliveryDate="February 28, 2024" 
        currentLocation="Ikeja, Lagos" status="in-transit"/>
     </div>
    </Adminlayout>
  )
}

export default Packagemanagement
