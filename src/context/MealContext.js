import React, { createContext, useState } from 'react'

export const MealContext = createContext()

const MealContextProvider = ({children}) => {
    const [selectedMeal, setselectedMeal] = useState('')

return (
        <MealContext.Provider value={
            {selectedMeal, setselectedMeal}
        }>
            {children}
        </MealContext.Provider>
    )
}

export default MealContextProvider