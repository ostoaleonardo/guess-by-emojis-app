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
                            <View style={styles.shadow} />
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
    },
    shadow: {
        width: '100%',
        height: '100%',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: colors.borderShadow,
        backgroundColor: colors.backgroundShadow,
    },
    letterContainer: {
        position: 'absolute',
        top: 1,
        zIndex: 2,
        width: '80%',
        height: '80%',
        borderWidth: 2,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.borderContainer,
        backgroundColor: colors.backgroundContainer,
    },
    letter: {
        fontSize: 14,
        textAlign: 'center',
        color: colors.letter,
        fontFamily: fonts.bold,
        textTransform: 'uppercase',
    },
    emptyContainer: {
        width: 35,
        height: 35,
        borderRadius: 10,
        opacity: 0.2,
        backgroundColor: colors.backgroundContainer,
    },
    dash: {
        width: '40%',
        height: '20%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.2,
        backgroundColor: colors.backgroundContainer,
    }
})
