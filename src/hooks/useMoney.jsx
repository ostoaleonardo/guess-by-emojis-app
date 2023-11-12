import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function useMoney() {
    const [money, setMoney] = useState(0)

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
    }, [money])

    return {
        money,
        spendMoney,
        getMoney,
        addMoney,
        initMoney,
        removeMoney,
    }
}
