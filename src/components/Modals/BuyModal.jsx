import { useEffect, useState } from 'react'
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { BuyButton } from '../Buttons/BuyButton'
import { AdButton } from '../Buttons/AdButton'
import { colors, fonts, images } from '../../constants'
import useMoney from '../../hooks/useMoney'
import usePowerUps from '../../hooks/usePowerUps'
import Animated, { FadeIn } from 'react-native-reanimated'

const blur = require('../../../assets/images/blur.png')

export function BuyModal({ powerUp, isVisible, onClose }) {
    const { money } = useMoney()
    const { buyPowerUp } = usePowerUps()
    const [isNotEnoughMoney, setIsNotEnoughMoney] = useState(false)
    let isBought = false

    const buyItem = async () => {
        if (money < powerUp?.price) {
            setIsNotEnoughMoney(true)
        } else {
            isBought = await buyPowerUp(powerUp?.price)
            onClose(isBought)
        }
    }

    const toggleCloseWithReward = () => {
        onClose(true)
    }

    const toggleCloseModal = () => {
        onClose(false)
        setIsNotEnoughMoney(false)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsNotEnoughMoney(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [isNotEnoughMoney])

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType='slide'
            statusBarTranslucent
        >
            <View style={styles.background} />
            <Image source={blur} style={styles.blurImage} />
            <View style={styles.modal}>
                <View style={styles.emojiContainer}>
                    <Image source={powerUp?.emoji} style={styles.emoji} />
                </View>
                <Text style={styles.description}>
                    {powerUp?.description}
                </Text>
                <View style={styles.buttonsContainer}>
                    <BuyButton price={powerUp?.price} onPress={buyItem} />
                    <AdButton onEarnedReward={toggleCloseWithReward} />
                </View>
                {isNotEnoughMoney && (
                    <Animated.View
                        style={styles.noMoneyContainer}
                        entering={FadeIn.duration(100)}
                    >
                        <Text style={styles.noMoney}>
                            No tienes suficiente dinero
                        </Text>
                    </Animated.View>
                )}
                <Pressable style={styles.closeButton} onPress={toggleCloseModal}>
                    <Image source={images.closeIcon} style={styles.closeIcon} />
                </Pressable>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0.5,
        backgroundColor: colors.crayola,
    },
    modal: {
        width: '90%',
        maxWidth: 450,
        padding: 32,
        borderRadius: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        backgroundColor: colors.white,
    },
    emojiContainer: {
        position: 'absolute',
        zIndex: 3,
        top: -30,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    blurImage: {
        position: 'absolute',
        top: 150,
        width: '100%',
        resizeMode: 'contain',
    },
    emoji: {
        position: 'absolute',
        zIndex: 2,
        width: 130,
        height: 130,
    },
    description: {
        fontSize: 24,
        opacity: 0.8,
        marginVertical: 16,
        textAlign: 'center',
        color: colors.crayola,
        fontFamily: fonts.bold,
    },
    buttonsContainer: {
        width: '100%',
        gap: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    closeButton: {
        position: 'absolute',
        zIndex: 3,
        top: -16,
        right: -16,
        padding: 12,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.closeButton,
    },
    closeIcon: {
        width: 24,
        height: 24,
    },
    noMoneyContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    noMoney: {
        fontSize: 24,
        textAlign: 'center',
        color: colors.crayola,
        fontFamily: fonts.bold,
    },
})