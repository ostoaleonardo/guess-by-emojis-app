import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../constants'

export function ItemStoreCard({ item, count, onPress }) {
    return (
        <Pressable
            style={styles.pressContainer}
            onPress={onPress}
        >
            <View style={styles.shadow} />
            <View style={styles.container}>
                <View style={styles.emojiContainer}>
                    <View style={styles.reflection} />
                    <Image source={item.emoji} style={styles.emoji} />
                </View>
                <View style={styles.priceCounterContainer}>
                    <View style={styles.priceContainer}>
                        <View style={styles.priceTextContainer}>
                            <Text style={styles.priceText}>
                                💵 {item.price}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.counterContainer}>
                        <View style={styles.counterTextContainer}>
                            <Text style={styles.counterText}>
                                {count}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    pressContainer: {
        width: '48%',
        aspectRatio: 1,
        alignItems: 'center',
    },
    shadow: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
        backgroundColor: colors.shadowCard,
    },
    container: {
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        height: '96%',
        borderRadius: 16,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundCard,
    },
    emojiContainer: {
        width: '50%',
        aspectRatio: 1,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: colors.borderContainer,
        backgroundColor: colors.backgroundContainer,
    },
    emoji: {
        width: '60%',
        height: '60%',
    },
    priceCounterContainer: {
        width: '100%',
        gap: 2,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    priceContainer: {
        width: 70,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderRadius: 12,
        borderColor: colors.borderMoneyShadow,
    },
    priceTextContainer: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: colors.borderMoneyContainer,
        backgroundColor: colors.backgroundMoneyContainer,
    },
    priceText: {
        fontSize: 12,
        color: 'white',
        fontFamily: fonts.bold,
    },
    counterContainer: {
        width: 35,
        height: 35,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#5c1d1d',
    },
    counterTextContainer: {
        position: 'absolute',
        top: 0,
        zIndex: 2,
        width: '100%',
        height: '100%',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#D64141',
        backgroundColor: '#E25656',
    },
    counterText: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        fontFamily: fonts.medium,
    },
    reflection: {
        position: 'absolute',
        left: -30,
        width: '80%',
        height: '220%',
        opacity: 0.1,
        backgroundColor: colors.backgroundCard,
        transform: [{ rotate: '45deg' }],
    },
})
