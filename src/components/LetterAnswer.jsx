import { Pressable, StyleSheet, Text, View } from 'react-native'

export function LetterAnswer({ onPress, letter }) {
    return (
        <Pressable
            style={styles.container}
            onPress={onPress}
        >
            {letter !== '-' ? (
                <View style={styles.letterContainer}>
                    <Text style={styles.letter}>
                        {letter}
                    </Text>
                </View>
            ) : (
                <View style={styles.empty} />
            )}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    letterContainer: {
        width: '100%',
        height: '100%',
        aspectRatio: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
    },
    letter: {
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    empty: {
        width: '40%',
        height: '20%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
    }
})
