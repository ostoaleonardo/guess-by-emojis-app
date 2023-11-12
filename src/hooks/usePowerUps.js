import { useContext, useEffect } from 'react'
import { PowerUpsContext } from '../context/powerUpsContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function usePowerUps() {
    const { powerUps, setPowerUps } = useContext(PowerUpsContext)

    const getPowerUps = async () => {
        const storedPowerUps = await AsyncStorage.getItem('powerUps')
        const parsedPowerUps = storedPowerUps ? JSON.parse(storedPowerUps) : initPowerUps()
        setPowerUps(parsedPowerUps)
        return parsedPowerUps
    }

    const spendPowerUps = async (id, int) => {
        const currentPowerUps = await getPowerUps()

        const updatedPowerUps = {
            ...currentPowerUps,
            [id]: {
                count: currentPowerUps[id].count - int
            }
        }

        await AsyncStorage.setItem('powerUps', JSON.stringify(updatedPowerUps))
        getPowerUps()
    }

    const addPowerUps = async (id, int) => {
        const currentPowerUps = await getPowerUps()

        const updatedPowerUps = {
            ...currentPowerUps,
            [id]: {
                count: currentPowerUps[id].count + int
            }
        }
        
        await AsyncStorage.setItem('powerUps', JSON.stringify(updatedPowerUps))
        getPowerUps()
    }

    const initPowerUps = async () => {
        const storedPowerUps = await AsyncStorage.getItem('powerUps')

        if (!storedPowerUps) {
            await AsyncStorage.setItem('powerUps', JSON.stringify(
                {
                    "1": { "count": 0 },
                    "2": { "count": 0 },
                    "3": { "count": 0 },
                }
            ))
        }
    }

    const removePowerUps = async () => {
        await AsyncStorage.removeItem('powerUps')
    }

    useEffect(() => {
        getPowerUps()
    }, [])

    return {
        powerUps,
        getPowerUps,
        spendPowerUps,
        addPowerUps,
        initPowerUps,
        removePowerUps,
    }
}
