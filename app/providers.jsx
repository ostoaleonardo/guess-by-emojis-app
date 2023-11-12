import { MoneyProvider } from '../src/context/moneyContext'
import { PowerUpsProvider } from '../src/context/powerUpsContext'

export function Providers({ children }) {
    return (
        <MoneyProvider>
            <PowerUpsProvider>
                {children}
            </PowerUpsProvider>
        </MoneyProvider>
    )
}