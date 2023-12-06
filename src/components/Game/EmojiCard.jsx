import { Image, StyleSheet, View } from 'react-native'
import { colors } from '../../constants'

export function EmojiCard({ emoji }) {
    return (
        <View style={styles.container}>
            <View style={styles.emojiContainer}>
                <Image source={emoji} style={styles.emoji} />
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
        borderWidth: 4,
        borderRadius: 14,
        borderColor: colors.borderShadow,
        backgroundColor: colors.backgroundShadow,
    },
    emojiContainer: {
        position: 'absolute',
        top: 1,
        zIndex: 2,
        width: '98%',
        height: '90%',
        borderWidth: 3,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.borderContainer,
        backgroundColor: colors.backgroundContainer,
    },
    emoji: {
        width: 32,
        height: 32,
    },
})
