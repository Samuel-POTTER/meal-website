import React from 'react';
import {FaSistrix} from 'react-icons/fa'

export const Searchbar = () => {
    return(
        <div className='flex justify-between'>
            <div className='text-white space-y-2'>
                <div className='font-bold text-3xl'>
                    Meal
                </div>
                <div className='text-xs text-gray-300'>
                    {new Date().toDateString()}
                </div>
            </div>
            <div className='relative'>
                <input placeholder='food, ingredients etc...' className='bg-[#2D303E] px-8 rounded-lg outline-none h-12 text-white' />
                <FaSistrix color='white' className='absolute top-4 left-2' />
            </div>
        </div>
      )
};
