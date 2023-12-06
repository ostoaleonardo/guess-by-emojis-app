import { router } from 'expo-router'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { images, colors } from '../../constants'

export function EmojiLevel({ item, mode, isUnlocked = false }) {
    const goLevel = () => {
        router.push('/game?mode=' + mode + '&id=' + item.id)
    }

    return (
        <Pressable
            style={styles.cardContainer}
            onPress={isUnlocked ? goLevel : null}
        >
            {!isUnlocked && (
                <View style={styles.lockedLayer}>
                    <View style={styles.lockedContainer}>
                        <Image source={images.locked} style={styles.locked} />
                    </View>
                </View>
            )}

            <View style={styles.container}>
                <View style={styles.reflection} />
                {item.emojis.map((emoji, index) => (
                    <Image key={index} source={emoji} style={[styles.emoji, { opacity: isUnlocked ? 1 : 0.2 }]} />
                ))}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        position: 'relative',
        width: '30%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderRadius: 16,
        borderColor: colors.borderShadow,
        backgroundColor: colors.backgroundShadow,
    },
    container: {
        position: 'absolute',
        zIndex: 2,
        top: 1,
        width: '98%',
        height: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderRadius: 12,
        overflow: 'hidden',
        borderColor: colors.borderContainer,
        backgroundColor: colors.backgroundContainer,
    },
    reflection: {
        position: 'absolute',
        left: -10,
        width: '45%',
        height: '150%',
        opacity: 0.2,
        backgroundColor: colors.backgroundCard,
        transform: [{ rotate: '20deg' }],
    },
    emoji: {
        width: 24,
        height: 24,
    },
    lockedLayer: {
        position: 'absolute',
        zIndex: 3,
        top: 1,
        width: '98%',
        height: '90%',
        opacity: 0.8,
        borderRadius: 12,
        backgroundColor: colors.backgroundHeader,
    },
    lockedContainer: {
        position: 'absolute',
        zIndex: 10,
        top: -5,
        right: -5,
        width: 20,
        height: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colors.borderContainer,
        backgroundColor: colors.backgroundContainer,
    },
    locked: {
        width: 12,
        height: 12,
    },
})
