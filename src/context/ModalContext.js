import React, { createContext, useState } from 'react'

export const ModalContext = createContext()

const ModalContextProvider = ({children}) => {
    const [isVisible, setisVisible] = useState(false)

return (
        <ModalContext.Provider value={
            {isVisible, setisVisible}
        }>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider