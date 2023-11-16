import { StyleSheet, Text, View } from 'react-native'

export function EmojiText({ emoji }) {
    return (
        <View style={styles.container}>
            <View style={styles.shadow} />
            <View style={styles.emojiContainer}>
                <Text style={styles.emoji}>
                    {emoji}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow: {
        position: 'absolute',
        top: 1,
        width: '100%',
        height: '100%',
        borderWidth: 4,
        borderRadius: 14,
        borderColor: '#070200',
        backgroundColor: '#7d878b',
    },
    emojiContainer: {
        position: 'absolute',
        top: 3,
        zIndex: 2,
        width: '80%',
        height: '85%',
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fefde7',
        backgroundColor: '#c5c5b9',
    },
    emoji: {
        fontSize: 24,
    },
})
