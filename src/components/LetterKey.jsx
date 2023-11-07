import { Pressable, StyleSheet, Text, View } from 'react-native'

export function LetterKey({ onPress, letter }) {
    return (
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
    )
}

const styles = StyleSheet.create({
    pressContainer: {
        width: 55,
        height: 55,
    },
    keyContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    shadow: {
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        left: 0,
        width: '94%',
        height: '94%',
        borderRadius: 10,
        backgroundColor: '#ffa258',
    },
    letterContainer: {
        position: 'absolute',
        zIndex: 2,
        top: 0,
        right: 0,
        width: '92%',
        height: '92%',
        borderWidth: 4,
        borderColor: '#ffa258',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffebb8',
    },
    letter: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Rubik-Bold',
        textTransform: 'uppercase',
        color: '#8d2100',
    },
    empty: {
        width: '100%',
        height: '90%',
        aspectRatio: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    }
})
