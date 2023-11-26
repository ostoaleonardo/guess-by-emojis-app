import { router } from 'expo-router'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../contants/theme'

const lockIcon = require('../../assets/icons/lock.png')

export function EmojiCard({ item, mode, isUnlocked = false }) {
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
                    <View style={styles.unlocked}>
                        <Image source={lockIcon} style={styles.locked} />
                    </View>
                </View>
            )}

            <View style={styles.shadow} />
            <View style={styles.container}>
                <View style={styles.reflection} />
                <Text style={[styles.emojis, { opacity: isUnlocked ? 1 : 0.1 }]}>
                    {item.emojis.join('')}
                </Text>
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
    },
    shadow: {
        zIndex: 1,
        width: '100%',
        height: '100%',
        borderWidth: 4,
        borderRadius: 16,
        borderColor: colors.borderShadow,
        backgroundColor: colors.backgroundShadow,
    },
    container: {
        position: 'absolute',
        zIndex: 2,
        top: 2,
        width: '90%',
        height: '84%',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
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
    emojis: {
        fontSize: 18,
        textAlign: 'center',
    },
    unlocked: {
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
    lockedLayer: {
        position: 'absolute',
        zIndex: 3,
        top: 2,
        width: '90%',
        height: '84%',
        opacity: 0.8,
        borderRadius: 12,
        backgroundColor: colors.backgroundHeader,
    },
})
