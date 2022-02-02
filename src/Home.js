import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { CategoriesButton } from './CategoriesButton';
import { CategoriesContext } from './context/CategoriesContext';
import { MealCard } from './MealCard';
import { filterByCategory } from './request/MealRequest';
import { Searchbar } from './Searchbar';

export const Home = () => {
    const { categorie } = useContext(CategoriesContext);
    const { data } = useQuery(['meals', categorie], () => filterByCategory({category: categorie}))

    return(
        <div className='h-screen bg-[#252836] py-6 px-4'>
            <Searchbar />
            <CategoriesButton />
            <div className='flex justify-between items-center mb-10'>
                <span className='text-white text-xl font-bold'>Choose Meal</span>
                <select className='bg-[#1F1D2B] text-white px-4 py-2 rounded-lg outline-none'>
                    <option value="test">test</option>
                </select>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-5 w-2/3 gap-y-10 place-items-center'>
                    {
                        data && data.meals &&
                        data.meals.map((i, key) => {
                            return(
                                <MealCard key={key} title={i.strMeal} image={`${i.strMealThumb}/preview`} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};
