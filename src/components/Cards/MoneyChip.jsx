import { router } from 'expo-router'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, fonts, images } from '../../constants'
import Animated from 'react-native-reanimated'
import useBounceAnimation from '../../hooks/useBounceAnimation'
import useMoney from '../../hooks/useMoney'

export function MoneyChip() {
    const { money } = useMoney()
    const animatedStyle = useBounceAnimation(money)

    const goStore = () => {
        router.push('/store')
    }

    return (
        <Pressable style={styles.chipContainer} onPress={goStore}>
            <Image source={images.dollars} style={styles.dollarIcon} />
            <View style={styles.moneyContainer}>
                <Animated.Text style={[styles.moneyText, animatedStyle]}>
                    {money}
                </Animated.Text>
                <Text style={styles.plusIcon}>+</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    chipContainer: {
        gap: 4,
        marginEnd: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dollarIcon: {
        position: 'absolute',
        zIndex: 3,
        top: -6,
        left: -6,
        width: 28,
        height: 28,
        transform: [{ rotate: '-45deg' }],
    },
    moneyContainer: {
        flexDirection: 'row',
        gap: 4,
        paddingRight: 1,
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.borderMoneyShadow,
        backgroundColor: colors.backgroundMoneyContainer,
    },
    moneyText: {
        fontSize: 12,
        marginLeft: 28,
        color: colors.textCard,
        fontFamily: fonts.medium,
    },
    plusIcon: {
        width: 18,
        fontSize: 10,
        aspectRatio: 1,
        borderRadius: 20,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: fonts.bold,
        backgroundColor: colors.borderMoneyContainer,
    },
})
