'use client'
import './Header.css'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight} from "react-icons/fa";
import { MdNotifications } from "react-icons/md";


const Header = () => {
    const [selectedOption, setSelectedOption] = useState('question');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };
    return (
        <div className='py-[10px] header'>
           <div className='flex justify-between'>
                <div className='ml-4'>
                    <FaChevronLeft className='mr-[15px] cursor-pointer text-white'/>
                    <FaChevronRight className='cursor-pointer text-white'/>
                </div>
                <div>
                    <input className='headerSearch md:w-[500px] md:p-[2px] rounded-lg focus:outline-none' type="search" name="" id="" placeholder='search..'/>                  
                </div>
                <div className='flex items-center justify-center mr-4'>
                    <MdNotifications className=' cursor-pointer text-lg text-white'/>
                    <div className="">
                    <select className="your-dropdown-styles cursor-pointer p-[3px 3px] rounded-[5px]" value={selectedOption} onChange={handleChange}>
                        <option className='cursor-pointer text-base' value="question">Who shot first?</option>
                        <option className='cursor-pointer text-base' value="han">Han Solo</option>
                        <option className='cursor-pointer text-base' value="greedo">Greedo</option>
                    </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;