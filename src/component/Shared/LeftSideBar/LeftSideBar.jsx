"use client";
import React from 'react';
import './LiftSideBar.css'
import { MdHome, MdOutlineHeadset, MdSearch, MdKeyboardVoice  } from "react-icons/md";
import { BsFillGridFill } from "react-icons/bs";
import { LuRadioTower } from "react-icons/lu";
import { SiYoutubemusic } from "react-icons/si";
import { FaHeart, FaFile, FaUser, FaMusic} from "react-icons/fa";
import { BiSolidBookmarkHeart } from "react-icons/bi";

const LeftSideBar = () => {
    return (
        <div className='LiftSideBar md:p-[15px]'>
            <div className='LiftSideBarContainer'>
                {/* menu start  */}
                <div className='mt-[40px]'>
                    <div className='menuHeader  w-[150px]'>
                        <h2 className='mb-[4px] py-[5px]'><MdHome className='menuHeaderIcon md:w-[20px] md:h-[20px] ml-[5px] text-6xl  rounded-full p-[5px] mr-[10px]'/> Menu</h2>
                    </div>
                    <div className='mt-2'>
                        <ul className='md:ml-[10px]'>
                            <li className='md:text-base mb-[4px] text-white cursor-pointer hover:text-blue-400 transition-all duration-300'><MdOutlineHeadset className='mr-2'/>Discover</li>
                            <li className='md:text-base mb-[4px] text-white cursor-pointer hover:text-blue-400 transition-all duration-300'><MdSearch className='mr-2'/>Search</li>
                            <li className='md:text-base mb-[4px] text-white cursor-pointer hover:text-blue-400 transition-all duration-300'><BsFillGridFill className='mr-2'/>Library</li>
                            <li className='md:text-base mb-[4px] text-white cursor-pointer hover:text-blue-400 transition-all duration-300'><LuRadioTower className='mr-2'/>Radio</li>
                            <li className='md:text-base mb-[4px] text-white cursor-pointer hover:text-blue-400 transition-all duration-300'><SiYoutubemusic className='mr-2'/>Music Video</li>
                            <li className='md:text-base mb-[4px] text-white cursor-pointer hover:text-blue-400 transition-all duration-300'><MdKeyboardVoice className='mr-2'/>Podcasts</li>
                        </ul>
                    </div>
                </div>
                {/* menu end  */}


                {/* library start  */}
                <div className='mt-[25px]'>
                    <div className='menuHeader  w-[150px]'>
                        <h2 className='mb-[4px] py-[5px]'><MdHome className='menuHeaderIcon md:w-[20px] md:h-[20px] ml-[5px] text-6xl  rounded-full p-[5px] mr-[10px]'/>Library</h2>
                    </div>
                    <div className='mt-2'>
                        <ul className='md:ml-[10px]'>
                            <li className='md:text-base mb-[4px] text-white cursor-pointer hover:text-blue-400 transition-all duration-300'><MdOutlineHeadset className='mr-2'/>Recently Played</li>
                            <li className='md:text-base mb-[4px] text-white cursor-pointer hover:text-blue-400 transition-all duration-300'><FaHeart className='mr-2'/>Favorite Song</li>
                            <li className='md:text-base mb-[4px] text-white cursor-pointer hover:text-blue-400 transition-all duration-300'><FaFile className='mr-2'/>Album</li>
                            <li className='md:text-base mb-[4px] text-white cursor-pointer hover:text-blue-400 transition-all duration-300'><FaUser className='mr-2'/>Artist</li>
                        </ul>
                    </div>
                </div>
                {/*library end*/}


                {/* playlist start  */}
                <div className='mt-[25px]'>
                    <div className='menuHeader  w-[150px]'>
                        <h2 className='mb-[4px] py-[5px]'><MdHome className='menuHeaderIcon md:w-[20px] md:h-[20px] ml-[5px] text-6xl  rounded-full p-[5px] mr-[10px]'/>Playlist</h2>
                    </div>
                    <div className='mt-2'>
                        <ul className='md:ml-[10px]'>
                            <li className='md:text-base mb-[4px] text-white cursor-pointer hover:text-blue-400 transition-all duration-300'><FaHeart className='mr-2'/>Favorite Song</li>
                            <li className='md:text-base mb-[4px] text-white cursor-pointer hover:text-blue-400 transition-all duration-300'><FaMusic className='mr-2'/>Music of summer</li>
                            <li className='md:text-base mb-[4px] text-white cursor-pointer hover:text-blue-400 transition-all duration-300'><BiSolidBookmarkHeart className='mr-2'/>Today Top Hits</li>
                        </ul>
                    </div>
                </div>
                {/*playlist end*/}

            </div>

        </div>
    );
};

export default LeftSideBar;