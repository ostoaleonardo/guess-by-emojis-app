import { Pressable, StyleSheet, Text, View } from 'react-native'

export function ItemStoreCard({ item, count, onPress }) {
    return (
        <Pressable
            style={styles.pressContainer}
            onPress={onPress}
        >
            <View style={styles.shadow} />
            <View style={styles.container}>
                <View style={styles.emojiContainer}>
                    <Text style={styles.emojiText}>
                        {item.emoji}
                    </Text>
                    <Text style={styles.counterText}>
                        {count}
                    </Text>
                </View>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceIcon}>💵</Text>
                    <Text style={styles.priceText}>
                        {item.price}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressContainer: {
        position: 'relative',
        width: '48%',
        height: 200,
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
        gap: 8,
        width: '100%',
        height: '96%',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    emojiContainer: {
        width: 80,
        height: 80,
        aspectRatio: 1,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e4e3f14a',
    },
    emojiText: {
        fontSize: 32,
        textAlign: 'center',
    },
    counterText: {
        position: 'absolute',
        top: -5,
        right: -5,
        width: 24,
        height: 24,
        padding: 4,
        fontSize: 10,
        borderRadius: 16,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontFamily: 'Rubik-Medium',
        backgroundColor: '#3177FF',
    },
    title: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Rubik-Medium',
    },
    subtitle: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        fontFamily: 'Rubik-Medium',
    },
    priceContainer: {
        borderWidth: 2,
        borderRadius: 20,
        paddingVertical: 2,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#e4e3f1',
        backgroundColor: 'white',
    },
    priceIcon: {
        fontSize: 14,
        paddingRight: 8,
        fontFamily: 'Rubik-Medium',
    },
    priceText: {
        fontSize: 14,
        fontFamily: 'Rubik-Medium',
    },
})
