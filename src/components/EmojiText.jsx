import { StyleSheet, Text, View } from 'react-native'

export function EmojiText({ emoji }) {
    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>
                {emoji}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
    },
    emoji: {
        fontSize: 32,
        textAlign: 'center',
    },
})
