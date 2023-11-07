import { useGlobalSearchParams } from 'expo-router'
import { Image, StyleSheet, View } from 'react-native'
import { EmojiCard } from '../../src/components/EmojiCard'
import { movies, series, characters, videogames, brands, countries } from '../../src/contants/emojis'

const image = require('../../assets/images/header.png')

export default function Levels() {
    const params = useGlobalSearchParams()

    const mode = params.mode === 'movies' ? movies
        : params.mode === 'series' ? series
            : params.mode === 'characters' ? characters
                : params.mode === 'videogames' ? videogames
                    : params.mode === 'brands' ? brands
                        : params.mode === 'countries' && countries

    return (
        <View style={styles.container}>
            <Image source={image} style={styles.imageHeader} />
            <View style={styles.grid}>
                {mode.map((item, index) => (
                    <EmojiCard key={index} item={item} mode={params.mode} />
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
