import { useCallback, useEffect, useState } from 'react'
import { useGlobalSearchParams, useFocusEffect, useRouter } from 'expo-router'
import { ScrollView, StyleSheet, View } from 'react-native'
import { BannerAdMobContainer, LevelCard } from '../../src/components'
import { categories } from '../../src/constants'
import useLevels from '../../src/hooks/useLevels'

export default function Levels() {
    const router = useRouter()
    const params = useGlobalSearchParams()
    const levels = categories[params.mode].levels
    const [unlockedLevels, setUnlockedLevels] = useState(false)
    const { getLevelsByCategory } = useLevels()

    useEffect(() => {
        const title = categories[params.mode].title
        router.setParams({ title })
    }, [])

    useFocusEffect(
        useCallback(() => {
            const checkLockedCategory = async () => {
                const levels = await getLevelsByCategory(params.mode)
                setUnlockedLevels(levels)
            }

            checkLockedCategory()
        }, [])
    )

    return (
        <BannerAdMobContainer>
            <ScrollView
                overScrollMode='never'
                style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.levelsContainer}>
                    {unlockedLevels.length > 0 && Object.keys(levels).map((level, index) => (
                        <LevelCard
                            key={index}
                            id={level}
                            level={levels[level]}
                            mode={params.mode}
                            isUnlocked={unlockedLevels[index]?.unlocked ?? false}
                        />
                    ))}
                </View>
            </ScrollView>
        </BannerAdMobContainer>
    )
}

const styles = StyleSheet.create({
    levelsContainer: {
        flex: 1,
        maxWidth: 450,
        gap: 10,
        padding: 20,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
