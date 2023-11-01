import { Pressable, StyleSheet, Text, View } from 'react-native'

export function EmojiCard({ item }) {
    const goHref = () => {
        router.push(item.href)
    }

    return (
        <Pressable style={styles.card} onPress={goHref}>
            <View style={styles.shadow} />
            {/* <View style={styles.unlocked} /> */}
            <View style={styles.container}>
                <Text style={styles.title}>
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
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
