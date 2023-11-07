import { Pressable, StyleSheet, Text, View } from 'react-native'

export function LetterAnswer({ onPress, letter }) {
    return (
        <Pressable
            style={styles.pressContainer}
            onPress={onPress}
        >
            {letter !== false && letter !== '-' ? (
                <View style={styles.keyContainer}>
                    <View style={styles.shadow} />
                    <View style={styles.letterContainer}>
                        <Text style={styles.letter}>
                            {letter}
                        </Text>
                    </View>
                </View>
            ) : letter === false && (
                <View style={styles.emptyContainer} />
            )}

            {letter === '-' && (
                <View style={styles.dash} />
            )}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressContainer: {
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
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
        width: '94%',
        height: '94%',
        borderWidth: 4,
        borderColor: '#ffa258',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffebb8',
    },
    letter: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Rubik-Bold',
        textTransform: 'uppercase',
        color: '#8d2100',
    },
    emptyContainer: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#e4e3f1',
    },
    dash: {
        width: '40%',
        height: '20%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e4e3f1',
    }
})
