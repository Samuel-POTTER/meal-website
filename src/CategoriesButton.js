import React, { useContext } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { CategoriesContext } from './context/CategoriesContext';
import { getAllCategories } from './request/MealRequest';

export const CategoriesButton = () => {
    const queryClient = useQueryClient();
    const { setcategorie } = useContext(CategoriesContext);
    const { data } = useQuery('Categories', getAllCategories, {
        retry: 2
    })

    return(
        <div className='text-white space-x-4 my-4'>
            {data && data.categories &&  data.categories.map((i, key) => {
                return(
                    <button key={key} onClick={() => {setcategorie(i.strCategory); queryClient.invalidateQueries('meals')}} className='bg-[#EA7C69] px-2 py-1 rounded-md'>{i.strCategory}</button>
                )
            })}
        </div>
    )
};
