import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function useLockLevels() {
    const [lockedLevels, setLockedLevels] = useState({})

    const lockLevels = async (category, levels) => {
        // Get existing locked levels (if it exists)
        const storedLevels = await AsyncStorage.getItem('lockedLevels')
        const storedLockedLevels = storedLevels ? JSON.parse(storedLevels) : {}

        // Mark the first level as unlocked (false) and the rest as locked (true)
        const blockedLevels = levels.map((level, index) => ({
            id: level.id,
            locked: index !== 0,
        }))

        // Add the locked levels to the category
        storedLockedLevels[category] = blockedLevels

        // Update the AsyncStorage
        await AsyncStorage.mergeItem('lockedLevels', JSON.stringify(storedLockedLevels))
    }

    useEffect(() => {
        // Load locked levels from AsyncStorage
        const loadLockedLevels = async () => {
            const storedLevels = await AsyncStorage.getItem('lockedLevels')
            if (storedLevels) {
                setLockedLevels(JSON.parse(storedLevels))
            }
        }
        loadLockedLevels()
    }, [])

    const getLockedLevels = async (item) => {
        const storedLevels = await AsyncStorage.getItem(item)
        const storedLockedLevels = storedLevels ? JSON.parse(storedLevels) : {}
        return storedLockedLevels
    }
    
    const getLevelsByCategory = async (category) => {
        const lockedLevels = await getLockedLevels('lockedLevels')
        const categoryLevels = lockedLevels[category]
        return categoryLevels
    }

    const getLevelByIdAndCategory = async (id, category) => {
        const categoryLevels = await getLevelsByCategory(category)
        const level = categoryLevels.find((level) => level.id === id)
        return level
    }

    const unlockLevel = async (id, category) => {
        // Get category levels
        const categoryLevels = await getLevelsByCategory(category)

        // Update the level in id position
        const updatedLevels = categoryLevels.map((level) => {
            if (level.id === id) {
                level.locked = false
            }
            return level
        })

        // Update the level without changing the others
        await AsyncStorage.mergeItem('lockedLevels', JSON.stringify({ [category]: updatedLevels }))
    }

    const removeFromAsyncStorage = async (item) => {
        await AsyncStorage.removeItem(item)
    }

    return {
        lockedLevels,
        lockLevels,
        getLockedLevels,
        getLevelByIdAndCategory,
        getLevelsByCategory,
        unlockLevel,
        removeFromAsyncStorage,
    }
}
