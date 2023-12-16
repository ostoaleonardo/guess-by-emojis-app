import { MoneyProvider } from '../src/context/moneyContext'
import { RewardedAdProvider } from '../src/context/rewardedAdContext'

export function Providers({ children }) {
    return (
        <MoneyProvider>
            <RewardedAdProvider>
                {children}
            </RewardedAdProvider>
        </MoneyProvider>
    )
}