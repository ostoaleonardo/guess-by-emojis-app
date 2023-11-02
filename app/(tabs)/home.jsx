import { ScrollView, StyleSheet, View } from 'react-native'
import { ModeCard } from '../../src/components/ModeCard'
import { modes } from '../../src/contants/ui'

export default function Home() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.grid}>
                    {modes.map((item, index) => (
                        <ModeCard key={index} item={item} />
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4388f8',
    },
    grid: {
        gap: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingVertical: 20,
        marginHorizontal: 20,
        justifyContent: 'space-between',
    },
})
