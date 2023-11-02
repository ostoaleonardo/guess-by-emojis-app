import { router } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export function EmojiCard({ item, mode }) {
    const goLevel = () => {
        router.push('/game?mode=' + mode + '&id=' + item.id)
    }

    return (
        <Pressable
            style={styles.card}
            onPress={goLevel}
        >
            <View style={styles.shadow} />
            {/* <View style={styles.unlocked} /> */}
            <View style={styles.container}>
                <Text style={styles.emojis}>
                    {item.emojis.join('')}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        width: '30%',
        height: 70,
        borderRadius: 16,
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
        width: '100%',
        height: '92%',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c71e1',
    },
    emojis: {
        fontSize: 18,
        textAlign: 'center',
    },
    unlocked: {
        position: 'absolute',
        zIndex: 500,
        width: '100%',
        height: '100%',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
})
