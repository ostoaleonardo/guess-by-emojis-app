import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, fonts, images } from '../../constants'

export function BuyButton({ price, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.95 : 1 }] }, styles.pressContainer]}
        >
            <View style={styles.contentContainer}>
                <Image source={images.coin} style={styles.coinIcon} />
                <Text style={styles.label}>{price}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressContainer: {
        width: '32%',
        height: 60,
        borderRadius: 18,
        backgroundColor: colors.primaryButton,
    },
    contentContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    coinIcon: {
        width: 32,
        height: 32,
        marginRight: 8,
    },
    label: {
        fontSize: 22,
        fontFamily: fonts.bold,
        color: colors.white,
    },
})
