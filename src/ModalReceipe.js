import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { MealContext } from './context/MealContext';
import { ModalContext } from './context/ModalContext';
import { filterByName } from './request/MealRequest';

export const ModalReceipe = () => {
    const { selectedMeal } = useContext(MealContext)
    const { isVisible, setisVisible } = useContext(ModalContext)
    const [ingredient, setIngredient] = useState([])
    const [mesure, setMesure] = useState([])

    const { data, isLoading } = useQuery(['modal', selectedMeal], () => filterByName({mealName: selectedMeal}), {
        onSuccess: (data) => data.meals.map((i) => {
                        return (
                            Object.keys(i).map((val) => {
                                if (val.includes('strIngredient') && i[val] && i[val] !== "")
                                    setIngredient((current) => [...current, i[val]])
                                if (val.includes('strMeasure') && i[val] && i[val] !== "")
                                    setMesure((current) => [...current, i[val]])
                            })
                        )
            })
    })

    console.log(ingredient)
    return (
        <div onClick={() => setisVisible(false)} className={`fixed top-0 left-0 bg-black/40 w-screen h-screen ${isVisible ? 'block' : 'hidden' }`}>
            <div onClick={() => setisVisible(false)} className='fixed top-1/2 left-1/2 -translate-x-1/2 px-2 py-6 -translate-y-1/2 bg-[#252836] w-1/4 rounded-xl'>
                {!isLoading ? data.meals.map((i, key) => {
                    return(
                        <div className='text-white' key={key}>
                            <div className='flex items-center space-x-4 mb-4 justify-evenly'>
                                <img onError={({currentTarget}) => {currentTarget.onerror = null; currentTarget.src='https://www.ynova.be/wp-content/uploads/2020/02/coming-soon.jpg'}} src={`${i.strMealThumb}/preview`} alt={selectedMeal} className='rounded-full object-cover w-32 h-32' />
                                <span className='w-44'>{i.strMeal}</span>
                            </div>
                            <blockquote className='text-xs'>{i.strInstructions}</blockquote>
                            <ul>
                                {ingredient.map((i, key) => {
                                    return(
                                        <li key={key}>{i}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })
                : null }
            </div>
        </div>
    )
};
