import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../contants/theme'

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
        borderColor: colors.borderShadow,
        backgroundColor: colors.backgroundShadow,
    },
    emojiContainer: {
        position: 'absolute',
        top: 3,
        zIndex: 2,
        width: '80%',
        height: '82%',
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.borderContainer,
        backgroundColor: colors.backgroundContainer,
    },
    emoji: {
        fontSize: 24,
    },
})
