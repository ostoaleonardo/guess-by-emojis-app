import { useContext, useEffect } from 'react'
import { MoneyContext } from '../context/moneyContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function useMoney() {
    const { money, setMoney } = useContext(MoneyContext)

    const getMoney = async () => {
        const storedMoney = await AsyncStorage.getItem('money')
        storedMoney ? setMoney(storedMoney) : initMoney()
        return storedMoney
    }

    const spendMoney = async (money) => {
        const currentMoney = await getMoney()
        newMoney = parseInt(currentMoney) - parseInt(money)
        newMoneyString = newMoney.toString()
        await AsyncStorage.setItem('money', newMoneyString)
        setMoney(newMoneyString)
        getMoney()
    }

    const addMoney = async (money) => {
        const currentMoney = await getMoney()
        newMoney = parseInt(currentMoney) + parseInt(money)
        newMoneyString = newMoney.toString()
        await AsyncStorage.setItem('money', newMoneyString)
        getMoney()
    }

    const initMoney = async () => {
        const storedMoney = await getMoney()

        if (!storedMoney) {
            await AsyncStorage.setItem('money', '0')
            getMoney()
        }
    }

    const removeMoney = async () => {
        await AsyncStorage.removeItem('money')
    }

    useEffect(() => {
        getMoney()
    }, [])

    return {
        money,
        spendMoney,
        getMoney,
        addMoney,
        initMoney,
        removeMoney,
    }
}
