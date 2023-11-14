import { Pressable, StyleSheet, Text, View } from 'react-native'

export function PowerUp({ onPress, item, count }) {
    return (
        <Pressable
            style={styles.pressContainer}
            onPress={onPress ?? (() => { })}
        >
            <View style={styles.cardContainer}>
                <View style={styles.shadow} />
                <View style={styles.powerContainer}>
                    <Text style={styles.emoji}>
                        {item.emoji}
                    </Text>
                    <Text style={styles.count}>
                        {'x' + count}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressContainer: {
        width: '30%',
        height: 60,
    },
    cardContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    shadow: {
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        left: 0,
        width: '100%',
        height: '94%',
        borderRadius: 16,
        backgroundColor: '#e4e3f1',
    },
    powerContainer: {
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        height: '92%',
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        borderWidth: 2,
        borderColor: '#e4e3f1',
        backgroundColor: 'white',
    },
    emoji: {
        fontSize: 18,
        marginEnd: 8,
        textAlign: 'center',
    },
    count: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Rubik-Medium',
    },
})
