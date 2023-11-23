import Banner from '@/component/Home/Banner/Banner';
import FavouriteArtists from '@/component/Home/FavouriteArtists/FavouriteArtists';
import Header from '@/component/Shared/Header/Header';
import LeftSideBar from '@/component/Shared/LeftSideBar/LeftSideBar';
import React from 'react';

const page = () => {
  return (
    <div className='flex'>
      <div className='w-[20%]'>
         <LeftSideBar></LeftSideBar>
          
      </div>
      <div className='w-[80%]'>
        <Header></Header>
        <Banner></Banner>
        <FavouriteArtists></FavouriteArtists>
      </div>
      <div className='w-[20%]'>
        sidebar
      </div>
    </div>
  );
};

export default page;