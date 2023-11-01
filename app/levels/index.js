import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, View } from 'react-native'
import { movies } from '../../src/contants/emojis'
import { EmojiCard } from '../../src/components/EmojiCard'

export default function Levels() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.grid}>
                {movies.map((movie, index) => (
                    <EmojiCard key={index} item={movie} />
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
