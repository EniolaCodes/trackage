import React from 'react'
import Adminlayout from './adminlayout'
import GoogleMaps from '@/components/GoogleMaps'
import TopNav from '@/components/TopNav'

const Admindashboard = () => {
  return (
    <Adminlayout>
      <TopNav/>
      <GoogleMaps/>
    </Adminlayout>
    
  )
}

export default Admindashboard
