import { useState } from 'react'
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { SolidButton } from './SolidButton'
import { Alert } from './Alert'
import { colors, fonts } from '../contants/theme'
import useMoney from '../hooks/useMoney'
import usePowerUps from '../hooks/usePowerUps'

const blur = require('../../assets/images/blur.png')

export function BuyModal({ onPress, powerUp }) {
    const [counter, setCounter] = useState(1)
    const [enoughMoney, setEnoughMoney] = useState('')
    const { money, spendMoney } = useMoney()
    const { addPowerUps } = usePowerUps()

    const toggleCounter = (action) => () => {
        action === 'add' && counter < 10 && setCounter(counter + 1)
        action === 'remove' && counter > 1 && setCounter(counter - 1)
    }

    const buyItem = async () => {
        if (money < powerUp.price * counter) {
            showAlert('No tienes suficiente dinero')
            return
        }

        await spendMoney(powerUp.price * counter)
        await addPowerUps(powerUp.id, counter)
        onPress()
    }

    const showAlert = (message) => {
        setEnoughMoney(message)
        timeAlert()
    }

    const timeAlert = () => {
        setTimeout(() => {
            setEnoughMoney('')
        }, 3000)
    }

    return (
        <Modal animationType='slide' transparent={true} statusBarTranslucent>
            {enoughMoney && <Alert label={enoughMoney} />}
            <View style={styles.background} />
            <Image source={blur} style={styles.blurImage} />
            <View style={styles.modal}>
                <View style={styles.emojiContainer}>
                    <Text style={styles.emojiText}>
                        {powerUp?.emoji}
                    </Text>
                </View>
                <Text style={styles.title}>
                    {powerUp?.title}
                </Text>
                <Text style={styles.subtitle}>
                    {powerUp?.description}
                </Text>
                <View style={styles.counterContainer}>
                    <Pressable
                        onPress={toggleCounter('remove')}
                        style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.95 : 1 }] }, styles.pressCounter]}
                    >
                        <View style={styles.counterTextContainer}>
                            <Text style={styles.addText}>-</Text>
                        </View>
                    </Pressable>
                    <Text style={styles.counterText}>
                        {counter}
                    </Text>
                    <Pressable
                        onPress={toggleCounter('add')}
                        style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.95 : 1 }] }, styles.pressCounter]}
                    >
                        <View style={styles.counterTextContainer}>
                            <Text style={styles.addText}>+</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.buttonsContainer}>
                    <SolidButton
                        onPress={buyItem}
                        variant='primary'
                        label={'Comprar por $' + (powerUp?.price * counter)}
                    />
                    <SolidButton
                        onPress={onPress}
                        label='Cancelar'
                    />
                </View>
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
        backgroundColor: 'black',
    },
    modal: {
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '90%',
        padding: 32,
        borderRadius: 24,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundCard,
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
        width: '100%',
        resizeMode: 'contain',
    },
    emojiText: {
        position: 'absolute',
        zIndex: 2,
        fontSize: 96,
        fontFamily: fonts.bold,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: colors.letter,
        fontFamily: fonts.bold,
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.7,
        textAlign: 'center',
        color: colors.letter,
        fontFamily: fonts.medium,
    },
    counterContainer: {
        width: '100%',
        marginVertical: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pressCounter: {
        width: 65,
        height: 65,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: colors.borderShadow,
        backgroundColor: colors.backgroundShadow,
    },
    counterTextContainer: {
        position: 'absolute',
        top: 0,
        width: '98%',
        height: '92%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderRadius: 14,
        borderColor: colors.borderContainer,
        backgroundColor: colors.backgroundContainer,
    },
    addText: {
        fontSize: 24,
        color: colors.letter,
        fontFamily: fonts.medium,
    },
    counterText: {
        fontSize: 48,
        color: colors.letter,
        fontFamily: fonts.bold,
    },
    buttonsContainer: {
        gap: 4,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})