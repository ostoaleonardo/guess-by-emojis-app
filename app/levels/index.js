import { useCallback, useState } from 'react'
import { useGlobalSearchParams, useFocusEffect } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import { BannerAdMobContainer, EmojiCard } from '../../src/components'
import { movies, series, characters, videogames, brands, countries } from '../../src/constants'
import useLevels from '../../src/hooks/useLevels'

export default function Levels() {
    const params = useGlobalSearchParams()
    const [level, setLevel] = useState([])
    const { getLevelsByCategory } = useLevels()

    const mode = params.mode === 'movies' ? movies
        : params.mode === 'series' ? series
            : params.mode === 'characters' ? characters
                : params.mode === 'videogames' ? videogames
                    : params.mode === 'brands' ? brands
                        : params.mode === 'countries' && countries

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
