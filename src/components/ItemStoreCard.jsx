import { router } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export function ItemStoreCard({ item }) {
    return (
        <Pressable
            style={styles.pressContainer}
        >
            <View style={styles.shadow} />
            <View style={styles.container}>
                <View style={styles.emojiContainer}>
                    <Text style={styles.emojiText}>
                        {item.emoji}
                    </Text>
                </View>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>
                        {'$ ' + item.price}
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
        borderRadius: 12,
        paddingHorizontal: 8,
        backgroundColor: '#e4e3f1',
    },
    price: {
        fontSize: 18,
        fontFamily: 'Rubik-Medium',
    },
})
