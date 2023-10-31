import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text } from 'react-native'

export default function Store() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Tienda</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        margin: 20,
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
})
