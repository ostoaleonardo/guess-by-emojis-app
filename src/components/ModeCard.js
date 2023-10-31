import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export function ModeCard({ item }) {
    return (
        <Link href={item.href} style={styles.link}>
            <View style={styles.container}>
                <View style={styles.image} />
                <Text style={styles.title}>
                    {item.title}
                </Text>
            </View>
        </Link >
    )
}

const styles = StyleSheet.create({
    link: {
        width: '48%',
        height: 205,
        padding: 15,
        borderWidth: 1,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#e1e1e1',
    },
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 12,
        backgroundColor: '#f0f0f0'
    },
    title: {
        fontSize: 18,
        marginTop: 5,
        fontWeight: 'bold',
    },
})
