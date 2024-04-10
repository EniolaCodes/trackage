import React from 'react'
import Adminlayout from './adminlayout'
import ManageUser from '@/components/ManageUser'

const Usermanagement = () => {
  return (
    <Adminlayout>
      <div className='container mx-auto'> 
      <div className='p-4 flex justify-end'>
            <input
          type="text"
          name='name'
          placeholder="Search by Username"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        />
            </div> 
        <ManageUser Username="Debrah" Email="debby@hotmail.com" Visited="March 24, 2024 12:15"/>
        <ManageUser Username="Temidayo" Email="temmy@yahoomail.com" Visited="April 9, 2024 15:00"/>
        <ManageUser Username="Usman" Email="usman1999@yahoomail.com" Visited="April 9 2024 23:10"/>
        <ManageUser Username="Mamman" Email="mamman_1964@gmail.com" Visited="April 10, 2024 00:40"/>
      </div>
    </Adminlayout>
  )
}

export default Usermanagement
