import React from 'react';
import { useQuery } from 'react-query';
import { filterByName } from './request/MealRequest';

export const ModalReceipe = ({name}) => {
    const { data, isLoading } = useQuery(['modal', name], () => filterByName({mealName: name}))
    return (
        <div className='text-white'>

            {!isLoading ? data.meals.map((i, key) => {
                return(
                    <div key={key}>
                        <img src={`${i.strMealThumb}/preview`} alt={name} className='rounded-full object-cover w-20 h-20' />
                        <span>{i.strMeal}</span>
                        <blockquote>{i.strInstructions}</blockquote>
                        {/* <ul>
                            <li>{mesure} {ingredients}</li>
                        </ul> */}
                    </div>
                )
            })
            : null }
        </div>
    )
};
