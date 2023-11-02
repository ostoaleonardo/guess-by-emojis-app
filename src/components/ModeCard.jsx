import { router } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export function ModeCard({ item }) {
    const goLevels = () => {
        router.push('/levels?mode=' + item.mode)
    }

    return (
        <Pressable style={styles.card} onPress={goLevels}>
            <View style={styles.shadow} />
            <View style={styles.container}>
                <View style={styles.image} />
                <Text style={styles.title}>
                    {item.title}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        width: '48%',
        height: 'auto',
        borderRadius: 16,
        aspectRatio: 1 / 1.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow: {
        zIndex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 16,
        backgroundColor: '#1a56b6',
    },
    container: {
        position: 'absolute',
        top: 0,
        zIndex: 2,
        padding: 10,
        width: '100%',
        height: '96%',
        borderRadius: 16,
        alignItems: 'center',
        backgroundColor: '#2c71e1',
    },
    image: {
        width: '98%',
        height: 'auto',
        aspectRatio: 1,
        borderRadius: 12,
        backgroundColor: '#1a56b6'
    },
    title: {
        fontSize: 18,
        marginTop: 5,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Rubik-Bold',
    },
})
