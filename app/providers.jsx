import { MoneyProvider } from '../src/context/moneyContext'

export function Providers({ children }) {
    return (
        <MoneyProvider>
                {children}
        </MoneyProvider>
    )
}