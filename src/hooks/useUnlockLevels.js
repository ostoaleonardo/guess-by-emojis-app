import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function useUnlockLevels() {
    const asyncStorageKey = 'lockedLevels'
    const [unlockedLevels, setUnlockedLevels] = useState({})

    const getLockedLevels = async () => {
        const storedLevels = await AsyncStorage.getItem(asyncStorageKey)
        const unlockedLevels = storedLevels ? JSON.parse(storedLevels) : {}
        setUnlockedLevels(unlockedLevels)
        return unlockedLevels
    }

    const getLevelsByCategory = async (category) => {
        const lockedLevels = await getLockedLevels()
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
        const categoryStored = await getLevelsByCategory(category)
        const categoryLevels = categoryStored ? categoryStored : []

        if (categoryLevels.length === 0) {
            // If there are no levels, add the first one
            categoryLevels.push({ id: 1, unlocked: true })
        }

        // Add a new level in the category if it doesn't exist
        const level = categoryLevels.find((level) => level.id === id)

        if (!level) {
            categoryLevels.push({ id, unlocked: true })
        }

        // Update the category levels
        const lockedLevels = await getLockedLevels()
        lockedLevels[category] = categoryLevels

        // Update the AsyncStorage
        await AsyncStorage.mergeItem(asyncStorageKey, JSON.stringify(lockedLevels))
    }

    const removeAllLevels = async () => {
        await AsyncStorage.removeItem(asyncStorageKey)
    }

    useEffect(() => {
        getLockedLevels()
    }, [])

    return {
        unlockedLevels,
        getLockedLevels,
        getLevelByIdAndCategory,
        getLevelsByCategory,
        unlockLevel,
        removeAllLevels,
    }
}
