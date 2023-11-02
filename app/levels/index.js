import { useGlobalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, View } from 'react-native'
import { EmojiCard } from '../../src/components/EmojiCard'
import { movies, series, characters, videogames, brands, countries } from '../../src/contants/emojis'

export default function Levels() {
    const params = useGlobalSearchParams()

    const mode = params.mode === 'movies' ? movies
        : params.mode === 'series' ? series
            : params.mode === 'characters' ? characters
                : params.mode === 'videogames' ? videogames
                    : params.mode === 'brands' ? brands
                        : params.mode === 'countries' && countries

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.grid}>
                {mode.map((item, index) => (
                    <EmojiCard key={index} item={item} mode={params.mode} />
                ))}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4388f8',
    },
    title: {
        margin: 20,
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    grid: {
        gap: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
})
