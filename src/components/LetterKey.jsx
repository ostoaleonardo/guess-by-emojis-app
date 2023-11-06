import { Pressable, StyleSheet, Text, View } from 'react-native'

export function LetterKey({ onPress, letter }) {
    return (
        <Pressable
            style={styles.container}
            onPress={onPress}
        >
            {letter !== '-' ? (
                <>
                    <View style={styles.shadow} />
                    <View style={styles.letterContainer}>
                        <Text style={styles.letter}>
                            {letter}
                        </Text>
                    </View>
                </>
            ) : (
                <View style={styles.empty} />
            )}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 50,
        height: 55,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow: {
        zIndex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 10,
        backgroundColor: '#252525',
    },
    letterContainer: {
        position: 'absolute',
        top: 0,
        zIndex: 2,
        width: '100%',
        height: '90%',
        aspectRatio: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    letter: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Rubik-Bold',
        textTransform: 'uppercase',
    },
    empty: {
        width: '100%',
        height: '90%',
        aspectRatio: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    }
})
