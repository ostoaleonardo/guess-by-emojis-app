import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import useMoney from '../hooks/useMoney'
import { router } from 'expo-router'

export function MoneyChip() {
    const { money } = useMoney()

    const goStore = () => {
        router.push('/store')
    }

    return (
        <Pressable style={styles.chipContainer} onPress={goStore}>
            <Text style={styles.dollarIcon}>💵</Text>
            <View style={styles.moneyContainer}>
                <Text style={styles.moneyText}>
                    {money}
                </Text>
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
        borderColor: '#e4e3f1',
        backgroundColor: 'white',
    },
    moneyText: {
        fontSize: 12,
        marginLeft: 28,
        fontFamily: 'Rubik-Medium',
    },
    plusIcon: {
        width: 18,
        fontSize: 10,
        aspectRatio: 1,
        borderRadius: 20,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Rubik-Medium',
        backgroundColor: '#3177ff',
    },
})
