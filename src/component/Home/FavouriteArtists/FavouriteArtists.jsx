'use client'
import React, { useEffect, useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import dataOfFavouriteArtists from '@/Data/FavouriteArtists'
// console.log(dataOfFavouriteArtists)

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const FavouriteArtists = () => {

    const swiperRef = useRef(null);

    
  
    const goNext = () => {
      // Check if the Swiper instance is ready
      if (swiperRef.current && swiperRef.current.slideNext) {
        swiperRef.current.slideNext();
      }
    };
  
    const goPrev = () => {
      // Check if the Swiper instance is ready
      if (swiperRef.current && swiperRef.current.slidePrev) {
        swiperRef.current.slidePrev();
      }
    };

    return (
        <div className='m-[10px]'>
            <div className='flex items-center justify-between border-b-2 '>
                <h2 className=' text-white'>Favourite Artists</h2>
                <div>
                    <button onClick={goPrev}><FaAngleLeft className='mr-4 text-white'/></button>
                    <button onClick={goNext}><FaAngleRight className='text-white'/></button>
                </div>
            </div>
            <div className='pt-4'>

                <Swiper
                    slidesPerView={8}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                      }}
                    modules={[Pagination]}
                    className="mySwiper"
                    ref={swiperRef}
                  >
                    <div className='mx-auto'>
                        {
                            dataOfFavouriteArtists.map(item => 
                            <SwiperSlide key={item.id}>
                                <img src={item.image} alt="" width='80px' height='80px' className=' rounded-full cursor-pointer'/>
                                <h2 className='text-white'>{item.name}</h2>
                            </SwiperSlide>)
                        }
                    </div>
                    
                    
                    
                </Swiper>
               
            </div>
        </div>
    );
};

export default FavouriteArtists;