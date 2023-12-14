import useMoney from './useMoney'

export default function usePowerUps() {
    const { money, spendMoney } = useMoney()
    
    const buyPowerUp = async (price) => {
        if (money >= price) {
            spendMoney(price)
            return true
        }

        return false
    }

    return {
        buyPowerUp,
    }
}
