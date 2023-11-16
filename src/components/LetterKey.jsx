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
        width: 40,
        height: 40,
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
        borderColor: '#070200',
        backgroundColor: '#7d878b',
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
        borderColor: '#fefde7',
        backgroundColor: '#c5c5b9',
    },
    letter: {
        fontSize: 16,
        color: '#070200',
        textAlign: 'center',
        fontFamily: 'Rubik-Bold',
        textTransform: 'uppercase',
    },
    empty: {
        width: '100%',
        height: '100%',
        aspectRatio: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.1,
        backgroundColor: '#3e170f',
    }
})
