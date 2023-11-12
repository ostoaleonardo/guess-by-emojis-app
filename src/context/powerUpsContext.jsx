import { createContext, useState } from 'react'

export const PowerUpsContext = createContext()

export function PowerUpsProvider({ children }) {
    const [powerUps, setPowerUps] = useState({})

    return (
        <PowerUpsContext.Provider
            value={{
                powerUps,
                setPowerUps
            }}
        >
            {children}
        </PowerUpsContext.Provider>
    )
}    
