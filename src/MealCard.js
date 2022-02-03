import React, { useContext } from 'react';
import { MealContext } from './context/MealContext';
import { ModalContext } from './context/ModalContext';

export const MealCard = ({title, image}) => {
    const { setselectedMeal } = useContext(MealContext)
    const { setisVisible } = useContext(ModalContext)

    return (
        <div onClick={() => {setselectedMeal(title); setisVisible(true)}} className='bg-[#1F1D2B] rounded-lg py-6 w-40 h-44 relative cursor-pointer hover:scale-110 transition duration-300 ease-in-out'>
            <div className='flex flex-col h-full justify-end items-center'>
                <img alt="text" onError={({currentTarget}) => {currentTarget.onerror = null; currentTarget.src='https://www.ynova.be/wp-content/uploads/2020/02/coming-soon.jpg'}} src={image} className='rounded-full object-cover absolute -top-7 w-28 h-28' />
                <div className='text-center text-sm'>
                    <div className='text-white'>{title}</div>
                </div>
            </div>
        </div>
    )
};
