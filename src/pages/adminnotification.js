import Generalnotice from '@/components/Generalnotice';
import Adminlayout from './adminlayout';
import React from 'react'
import TopNav from '@/components/TopNav';



const Adminnotification = () => {
  
  return (
    <Adminlayout>
        <TopNav/>
        <Generalnotice/>
    </Adminlayout>

  
    
  );
};

export default Adminnotification;


