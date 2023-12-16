import { createContext, useState } from 'react'

export const RewardedAdContext = createContext()

export function RewardedAdProvider({ children }) {
    const [loaded, setLoaded] = useState(false)
    
    return (
        <RewardedAdContext.Provider
            value={{
                loaded,
                setLoaded
            }}
        >
            {children}
        </RewardedAdContext.Provider>
    )
}    
