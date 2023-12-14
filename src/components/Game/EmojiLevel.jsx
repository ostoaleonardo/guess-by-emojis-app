import { router } from 'expo-router'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { images, colors, fonts } from '../../constants'

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
                    <Image source={images.locked} style={styles.locked} />
                </View>
            )}

            <View style={styles.container}>
                {isUnlocked && item.emojis.map((emoji, index) => (
                    <Image key={index} source={emoji} style={[styles.emoji, { opacity: isUnlocked ? 1 : 0.2 }]} />
                ))}
                {/* {isUnlocked && (
                    <View style={styles.coinContainer}>
                        <Image source={images.emptyCoin} style={styles.coinIcon} />
                        <Text style={styles.coinText}>5</Text>
                    </View>
                )} */}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '30%',
        aspectRatio: 1,
        borderRadius: 32,
        backgroundColor: colors.borderColor,
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
        borderColor: colors.borderColor,
        backgroundColor: colors.whiteColor,
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
        color: colors.whiteColor,
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
