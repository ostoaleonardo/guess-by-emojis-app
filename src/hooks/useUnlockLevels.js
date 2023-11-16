import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function useUnlockLevels() {
    const asyncStorageKey = 'lockedLevels'

    const initCategory = async (category) => {
        // If there are no levels, add the first one
        const categoryLevels = []
        categoryLevels.push({ id: 1, unlocked: true })

        // Update the category levels
        const lockedLevels = await getUnlockedLevels()
        lockedLevels[category] = categoryLevels
        await AsyncStorage.mergeItem(asyncStorageKey, JSON.stringify(lockedLevels))
        
        return categoryLevels
    }

    const getUnlockedLevels = async () => {
        const storedLevels = await AsyncStorage.getItem(asyncStorageKey)
        const unlockedLevels = storedLevels ? JSON.parse(storedLevels) : {}
        return unlockedLevels
    }

    const getLevelsByCategory = async (category) => {
        const lockedLevels = await getUnlockedLevels()
        const categoryLevels = lockedLevels ? lockedLevels[category] : initCategory(category)
        return categoryLevels
    }

    const unlockLevel = async (id, category) => {
        // Get category levels
        const categoryStored = await getLevelsByCategory(category)
        const categoryLevels = categoryStored ? categoryStored : initCategory(category)

        // Add a new level in the category if it doesn't exist
        const level = categoryLevels.find((level) => level.id === id)

        if (!level) {
            categoryLevels.push({ id, unlocked: true })
        }

        // Update the category levels
        const lockedLevels = await getUnlockedLevels()
        lockedLevels[category] = categoryLevels

        // Update the AsyncStorage
        await AsyncStorage.mergeItem(asyncStorageKey, JSON.stringify(lockedLevels))
    }

    const removeAllLevels = async () => {
        await AsyncStorage.removeItem(asyncStorageKey)
    }

    useEffect(() => {
        getUnlockedLevels()
    }, [])

    return {
        getUnlockedLevels,
        getLevelsByCategory,
        unlockLevel,
        removeAllLevels,
    }
}
