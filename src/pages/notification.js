import Generalnotice from '@/components/Generalnotice';
import Userlayout from './userlayout';
import React from 'react'
import TopNav from '@/components/TopNav';




const Notification = () => {
 

  return (
    <Userlayout>
      <TopNav/>
     <Generalnotice/>
    </Userlayout>

  
    
  );
};

export default Notification;

