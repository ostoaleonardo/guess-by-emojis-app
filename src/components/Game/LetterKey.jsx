import Animated from 'react-native-reanimated'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../constants'
import useBounceAnimation from '../../hooks/useBounceAnimation'

export function LetterKey({ onPress, letter }) {
    const animatedStyle = useBounceAnimation(letter)

    return (
        <Animated.View style={animatedStyle}>
            <Pressable
                style={styles.pressContainer}
                onPress={onPress}
            >
                {letter !== '-' ? (
                    <View style={styles.keyContainer}>
                        <View style={styles.shadow} />
                        <View style={styles.letterContainer}>
                            <Text style={styles.letter}>
                                {letter}
                            </Text>
                        </View>
                    </View>
                ) : (
                    <View style={styles.empty} />
                )}
            </Pressable>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    pressContainer: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    keyContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 16,
        color: colors.letter,
        textAlign: 'center',
        fontFamily: fonts.bold,
        textTransform: 'uppercase',
    },
    empty: {
        width: '90%',
        height: '90%',
        aspectRatio: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.05,
        backgroundColor: colors.letter,
    }
})
