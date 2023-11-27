import { router } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Animated, { BounceIn, BounceOut } from 'react-native-reanimated'
import { colors, fonts } from '../contants/theme'
import useMoney from '../hooks/useMoney'
import useBounceAnimation from '../hooks/useBounceAnimation'

export function MoneyChip() {
    const { money } = useMoney()
    const animatedStyle = useBounceAnimation(money)

    const goStore = () => {
        router.push('/store')
    }

    return (
        <Pressable style={styles.chipContainer} onPress={goStore}>
            <Text style={styles.dollarIcon}>💵</Text>
            <View style={styles.moneyContainer}>
                <Animated.Text
                    style={[styles.moneyText, animatedStyle]}
                    entering={BounceIn} exiting={BounceOut}
                >
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
        top: -7,
        left: -6,
        fontSize: 24,
        textAlign: 'center',
        textAlignVertical: 'center',
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
