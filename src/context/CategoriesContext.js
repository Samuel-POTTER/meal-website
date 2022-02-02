import React, { createContext, useState } from 'react'

export const CategoriesContext = createContext()

const CategoriesContextProvider = ({children}) => {
    const [categorie, setcategorie] = useState('Beef')

return (
        <CategoriesContext.Provider value={
            {categorie, setcategorie}
        }>
            {children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesContextProvider