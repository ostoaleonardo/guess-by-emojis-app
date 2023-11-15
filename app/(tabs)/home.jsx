import { ScrollView, StyleSheet, View } from 'react-native'
import { ModeCard } from '../../src/components/ModeCard'
import { modes } from '../../src/contants/ui'

export default function Home() {
    return (
        <View style={styles.container}>
            <ScrollView
                overScrollMode='never'
                style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.viewContainer}>
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
        backgroundColor: '#e9f0ff',
    },
    scrollContainer: {
        width: '100%',
        height: '100%',
    },
    viewContainer: {
        width: '100%',
        height: '100%',
        padding: 24,
        paddingTop: 32,
        gap: 8,
    },
})
