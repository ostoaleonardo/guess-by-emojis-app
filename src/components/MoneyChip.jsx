import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useMoney from '../hooks/useMoney'

export function MoneyChip() {
    const { money, initMoney } = useMoney()

    useEffect(() => {
        const loadMoney = async () => {
            await initMoney()
        }

        loadMoney()
    }, [])

    return (
        <View style={styles.chipContainer}>
            <Text style={styles.moneyIcon}>💵</Text>
            <Text style={styles.moneyText}>
                {money}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    chipContainer: {
        marginEnd: 16,
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
    moneyIcon: {
        fontSize: 12,
        paddingRight: 8,
        fontFamily: 'Rubik-Bold',
    },
    moneyText: {
        fontSize: 12,
        fontFamily: 'Rubik-Medium',
    },
})
