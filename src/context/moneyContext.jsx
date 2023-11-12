import { createContext, useState } from 'react'

export const MoneyContext = createContext()

export function MoneyProvider({ children }) {
    const [money, setMoney] = useState(0)
    
    return (
        <MoneyContext.Provider
            value={{
                money,
                setMoney
            }}
        >
            {children}
        </MoneyContext.Provider>
    )
}    
