'use client'
import React from 'react';
import './Banner.css'
import Image from 'next/image';
const Banner = () => {
    return (
        <div className='banner rounded-lg'>
            <div className='bannerContuner mx-auto'>
                <div className='p-[20px]'>
                  <h2 className=' text-2xl text-white font-bold mb-[2px]'>Get premium free for 1 month</h2>
                    <p className='text-base text-white'>Only $9.99/month after cencel anytime</p>
                    <div className='flex gap-5 mt-5'>
                        <button className='btn1'>Get Stared</button>
                        <button className='btn2'>view plans</button>
                   </div>
                </div>  
            </div>
        </div>
    );
};

export default Banner;