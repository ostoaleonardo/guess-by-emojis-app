import { useCallback, useState } from 'react'
import { useGlobalSearchParams, useFocusEffect } from 'expo-router'
import { Image, StyleSheet, View } from 'react-native'
import { EmojiCard } from '../../src/components/EmojiCard'
import { movies, series, characters, videogames, brands, countries } from '../../src/contants/emojis'
import useUnlockLevels from '../../src/hooks/useUnlockLevels'

const image = require('../../assets/images/header.png')

export default function Levels() {
    const params = useGlobalSearchParams()
    const [level, setLevel] = useState([])
    const { getLevelsByCategory } = useUnlockLevels()

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
                console.log('levels', levels)
            }

            checkLockedCategory()
        }, [])
    )

    return (
        <View style={styles.container}>
            <Image source={image} style={styles.imageHeader} />
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9f0ff',
    },
    imageHeader: {
        width: '100%',
        height: 100,
        resizeMode: 'stretch',
    },
    grid: {
        gap: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingVertical: 24,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
})
