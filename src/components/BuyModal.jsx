import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { SolidButton } from './SolidButton'
import { useState } from 'react'
import useMoney from '../hooks/useMoney'
import usePowerUps from '../hooks/usePowerUps'

export function BuyModal({ onPress, powerUp }) {
    const [counter, setCounter] = useState(1)
    const { money, spendMoney } = useMoney()
    const { addPowerUps } = usePowerUps()

    const toggleCounter = (action) => () => {
        action === 'add' && counter < 10 && setCounter(counter + 1)
        action === 'remove' && counter > 1 && setCounter(counter - 1)
    }

    const buyItem = async () => {
        if (money < powerUp.price * counter) return

        await spendMoney(powerUp.price * counter)
        await addPowerUps(powerUp.id, counter)
        onPress()
    }

    return (
        <Modal animationType='slide' transparent={true} statusBarTranslucent>
            <View style={styles.background} />
            <View style={styles.modal}>
                <Text style={styles.title}>
                    {powerUp?.title}
                </Text>
                <Text style={styles.subtitle}>
                    {powerUp?.description}
                </Text>
                <View style={styles.counterContainer}>
                    <Pressable
                        style={styles.pressCounter}
                        onPress={toggleCounter('remove')}
                    >
                        <Text style={styles.addText}>-</Text>
                    </Pressable>
                    <Text style={styles.counterText}>
                        {counter}
                    </Text>
                    <Pressable
                        style={styles.pressCounter}
                        onPress={toggleCounter('add')}
                    >
                        <Text style={styles.addText}>+</Text>
                    </Pressable>
                </View>
                <SolidButton
                    onPress={buyItem}
                    label={'Comprar por $' + (powerUp?.price * counter)}
                />
                <SolidButton
                    onPress={onPress}
                    label='Cancelar'
                    variant='secondary'
                />
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
        backgroundColor: 'white',
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        fontFamily: 'Rubik-Bold',
    },
    subtitle: {
        fontSize: 18,
        color: '#555',
        textAlign: 'center',
        fontFamily: 'Rubik-Medium',
    },
    counterContainer: {
        width: '100%',
        marginVertical: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pressCounter: {
        width: 65,
        height: 65,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e4e3f1',
    },
    addText: {
        fontSize: 24,
        fontFamily: 'Rubik-Medium',
    },
    counterText: {
        fontSize: 48,
        fontFamily: 'Rubik-Bold',
    },
})