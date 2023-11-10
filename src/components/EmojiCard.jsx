import { router } from 'expo-router'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const lockIcon = require('../../assets/icons/lock.png')
const locked = require('../../assets/icons/locked.png')

export function EmojiCard({ item, mode, isLocked = true }) {
    const goLevel = () => {
        router.push('/game?mode=' + mode + '&id=' + item.id)
    }

    return (
        <Pressable
            style={styles.cardContainer}
            onPress={isLocked ? null : goLevel}
        >
            {isLocked && (
                <>
                    <View style={styles.unlocked}>
                        <Image source={lockIcon} style={styles.locked} />
                    </View>
                    <View style={styles.lockedLayer} />
                </>
            )}

            <View style={styles.shadow} />
            <View style={styles.container}>
                <Text style={styles.emojis}>
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
    },
    shadow: {
        zIndex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 16,
        backgroundColor: '#e4e3f1',
    },
    container: {
        position: 'absolute',
        top: 0,
        zIndex: 2,
        width: '100%',
        height: '90%',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
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
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },
    locked: {
        width: 15,
        height: 15,
    },
    lockedLayer: {
        position: 'absolute',
        zIndex: 3,
        width: '100%',
        height: '90%',
        borderRadius: 16,
        backgroundColor: '#ffffffd9',
    },
    imgLocked: {
        position: 'absolute',
        zIndex: 5,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
})
