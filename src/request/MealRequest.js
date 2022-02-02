import axios from 'axios'

export const getAllCategories = async () => {
    const res = await axios('https://www.themealdb.com/api/json/v1/1/categories.php', {
        method: 'GET'
    })
    return res.data;
}

export const filterByCategory = async ({category}) => {
    const res = await axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`, {
        method: 'GET'
    })
    return res.data;
}

export const filterByName = async ({mealName}) => {
    const res = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`, {
        method: 'GET'
    })
    return res.data;
}