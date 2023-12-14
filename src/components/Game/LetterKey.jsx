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
                {letter === false ? <View style={styles.empty} />
                    : (
                        <View style={styles.keyContainer}>
                            <View style={styles.letterContainer}>
                                <Text style={styles.letter}>
                                    {letter}
                                </Text>
                            </View>
                        </View>
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
        fontSize: 16,
        color: colors.textCard,
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
        opacity: 0.2,
        backgroundColor: '#313b42',
    }
})
