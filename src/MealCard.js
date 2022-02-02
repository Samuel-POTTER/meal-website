import React from 'react';

export const MealCard = ({title, image}) => {
    return (
        <div className='bg-[#1F1D2B] rounded-lg py-6 w-40 h-44 relative cursor-pointer'>
            <div className='flex flex-col h-full justify-end items-center'>
                <img alt="text" src={image} className='rounded-full object-cover absolute -top-7 w-28 h-28' />
                <div className='text-center text-sm'>
                    <div className='text-white'>{title}</div>
                </div>
            </div>
        </div>
    )
};
