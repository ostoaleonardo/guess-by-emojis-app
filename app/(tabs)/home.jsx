import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ModeCard } from '../../src/components/ModeCard'
import { modes } from '../../src/contants/ui'

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Modos de juego</Text>
                <View style={styles.grid}>
                    {modes.map((item, index) => (
                        <ModeCard key={index} item={item} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    grid: {
        gap: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    title: {
        margin: 20,
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
})
