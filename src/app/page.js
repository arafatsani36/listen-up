import Header from '@/component/Header/Header';
import LeftSideBar from '@/component/LeftSideBar/LeftSideBar';
import React from 'react';

const page = () => {
  return (
    <div className='flex'>
      <div className='w-[20%]'>
         <LeftSideBar></LeftSideBar>
          
      </div>
      <div className='w-[80%]'>
      <Header></Header>
      </div>
      <div className='w-[20%]'>
        sidebar
      </div>
    </div>
  );
};

export default page;