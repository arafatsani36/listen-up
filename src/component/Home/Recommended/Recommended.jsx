'use client'
import React from 'react';
import './Recommended.css'
import { FaAngleLeft, FaAngleRight, FaPlay } from 'react-icons/fa';
import img1 from '../../../asserts/artists/song/a1.jpg'
import Image from 'next/image';

const Recommended = () => {
    return (
        <div className='md:ml-[10px] md:mr-[10px] md:mt-[20px]'>
            <div className='flex items-center justify-between border-b-2 '>
                <h2 className=' text-white'>Recommended for you</h2>
                <div>
                    <button ><FaAngleLeft className='mr-4 text-white'/></button>
                    <button ><FaAngleRight className='text-white'/></button>
                </div>
            </div>
            <div className='flex'>
                <div className='RecommendedContuner p-2'>
                <div className='relative'>
                <span className=' absolute bottom-0 z-10 right-0 mr-[10px] text-white py-[2px] px-[8px] mb-[-8px] rounded-full musicBtn cursor-pointer'><FaPlay className=' text-[10px]'/></span>
                <Image src={img1} alt='' width={120} height={20} className=' rounded-lg relative'></Image>
                </div>
                 
                <h2 className=' text-[15px] mt-[10px] text-white'>My Favorite Song</h2>

                </div>
                <div className='RecommendedContuner p-2'>
                  <Image src={img1} alt='' width={120} height={20} className=' rounded-lg'></Image>
                  <h2 className=' text-[15px] mt-2 text-white'>My Favorite Song</h2>
                </div>
            </div>
        </div>
    );
};

export default Recommended;