import { Image, StyleSheet } from 'react-native'

export function EmojiCard({ emoji }) {
    return <Image source={emoji} style={styles.emoji} />
}

const styles = StyleSheet.create({
    emoji: {
        width: 56,
        height: 56,
    },
})
