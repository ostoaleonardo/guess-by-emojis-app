import { Pressable, StyleSheet, Text, View } from 'react-native'

export function MoneyAdCard() {
    return (
        <Pressable style={styles.pressContainer}>
            <View style={styles.shadow} />
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Gana billetes gratis
                    </Text>
                    <Text style={styles.subtitle}>
                        Mira un anuncio y gana 5 billetes
                    </Text>
                </View>
                <View style={styles.emojiContainer}>
                    <Text style={styles.emojiText}>
                        💸
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressContainer: {
        position: 'relative',
        width: '100%',
        height: 110,
        alignItems: 'center',
    },
    shadow: {
        width: '96%',
        height: '100%',
        borderRadius: 16,
        backgroundColor: '#e4e3f1',
    },
    container: {
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        height: '94%',
        padding: 16,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    emojiContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emojiText: {
        position: 'absolute',
        right: -30,
        fontSize: 84,
        textAlign: 'center',
        transform: [{ rotate: '-45deg' }],
    },
    titleContainer: {
        flex: 2,
        marginLeft: 16,
    },
    title: {
        fontSize: 16,
        color: '#429a46',
        fontFamily: 'Rubik-Medium',
    },
    subtitle: {
        fontSize: 12,
        color: '#555',
        fontFamily: 'Rubik-Medium',
    },
})
