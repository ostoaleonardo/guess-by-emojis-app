import { StyleSheet, View } from 'react-native'

export default function Store() {
    return (
        <View style={styles.container}>
        </View>
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
})
