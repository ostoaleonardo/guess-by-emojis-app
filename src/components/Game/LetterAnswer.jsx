import Animated from 'react-native-reanimated'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../constants'
import useBounceAnimation from '../../hooks/useBounceAnimation'

export function LetterAnswer({ onPress, letter }) {
    const animatedStyle = useBounceAnimation(letter)

    return (
        <Pressable
            style={styles.pressContainer}
            onPress={letter !== false ? onPress : null}
        >
            {letter === false ? <View style={styles.emptyContainer} />
                : letter === ' ' ? <View style={styles.dash} />
                    : (
                        <Animated.View style={[styles.keyContainer, animatedStyle]}>
                            <View style={styles.letterContainer}>
                                <Text style={styles.letter}>
                                    {letter}
                                </Text>
                            </View>
                        </Animated.View>
                    )}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressContainer: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    keyContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: colors.textCard,
    },
    letterContainer: {
        position: 'absolute',
        top: 0,
        zIndex: 2,
        width: '100%',
        height: '92%',
        borderWidth: 3,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.textCard,
        backgroundColor: colors.whiteColor,
    },
    letter: {
        fontSize: 14,
        textAlign: 'center',
        color: colors.textCard,
        fontFamily: fonts.bold,
        textTransform: 'uppercase',
    },
    emptyContainer: {
        width: 35,
        height: 35,
        opacity: 0.2,
        borderRadius: 10,
        backgroundColor: '#313b42',
    },
    dash: {
        width: '40%',
        height: '20%',
        opacity: 0.2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#313b42',
    }
})
