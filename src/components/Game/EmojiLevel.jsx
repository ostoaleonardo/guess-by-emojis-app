import { router } from 'expo-router'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { images, colors, fonts } from '../../constants'

export function EmojiLevel({ level, mode, isUnlocked = false }) {
    const goLevel = () => {
        router.push('/game?mode=' + mode + '&id=' + level.id)
    }

    return (
        <Pressable
            style={styles.cardContainer}
            onPress={isUnlocked ? goLevel : null}
        >
            {!isUnlocked && (
                <View style={styles.lockedLayer}>
                    <Image source={images.locked} style={styles.locked} />
                </View>
            )}

            <View style={styles.container}>
                {isUnlocked && level.emojis.map((emoji, index) => (
                    <Image key={index} source={emoji} style={styles.emoji} />
                ))}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '30%',
        aspectRatio: 1,
        borderRadius: 32,
        backgroundColor: colors.lightGray,
    },
    container: {
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        height: '94%',
        borderWidth: 1,
        borderRadius: 30,
        padding: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        borderColor: colors.lightGray,
        backgroundColor: colors.white,
    },
    emoji: {
        width: 32,
        height: 32,
    },
    coinContainer: {
        position: 'absolute',
        zIndex: 6,
        top: -15,
        right: -15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    coinIcon: {
        width: 40,
        height: 40,
    },
    coinText: {
        position: 'absolute',
        fontSize: 16,
        fontFamily: fonts.bold,
        color: colors.white,
    },
    lockedLayer: {
        position: 'absolute',
        zIndex: 3,
        width: '100%',
        height: '94%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    locked: {
        width: '50%',
        height: '50%',
    },
})
