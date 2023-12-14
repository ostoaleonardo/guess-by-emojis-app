import { Image, StyleSheet, View } from 'react-native'
import { colors, fonts, images } from '../../constants'
import Animated from 'react-native-reanimated'
import useBounceAnimation from '../../hooks/useBounceAnimation'

export function MoneyChip({ money }) {
    const animatedStyle = useBounceAnimation(money)

    return (
        <View style={styles.moneyContainer}>
            <Animated.Text style={[styles.moneyText, animatedStyle]}>
                {money}
            </Animated.Text>
            <Image source={images.coin} style={styles.coinIcon} />
        </View>
    )
}

const styles = StyleSheet.create({
    moneyContainer: {
        borderWidth: 1,
        paddingStart: 8,
        borderRadius: 20,
        flexDirection: 'row',
        borderColor: colors.borderColor,
        backgroundColor: colors.whiteColor,
    },
    coinIcon: {
        position: 'absolute',
        zIndex: 3,
        top: -6,
        right: -6,
        width: 42,
        height: 42,
    },
    moneyText: {
        fontSize: 18,
        marginRight: 40,
        fontFamily: fonts.bold,
        color: colors.textCard,
    },
})
