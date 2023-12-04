import { useCallback, useState } from 'react'
import { useGlobalSearchParams, useFocusEffect } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import { BannerAdMobContainer, EmojiCard } from '../../src/components'
import { getMode } from '../../src/utils/getMode'
import useLevels from '../../src/hooks/useLevels'

export default function Levels() {
    const params = useGlobalSearchParams()
    const mode = getMode(params.mode).levels
    const [level, setLevel] = useState([])
    const { getLevelsByCategory } = useLevels()

    useFocusEffect(
        useCallback(() => {
            const checkLockedCategory = async () => {
                const levels = await getLevelsByCategory(params.mode)
                setLevel(levels)
            }

            checkLockedCategory()
        }, [])
    )

    return (
        <BannerAdMobContainer>
            <View style={styles.grid}>
                {level.length > 0 && mode.map((item, index) => (
                    <EmojiCard
                        key={index}
                        item={item}
                        mode={params.mode}
                        isUnlocked={index === 0 ? true : level[index]?.unlocked}
                    />
                ))}
            </View>
        </BannerAdMobContainer>
    )
}

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        gap: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingVertical: 24,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
})
