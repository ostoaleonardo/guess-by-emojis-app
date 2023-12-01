import { router } from 'expo-router'
import { Modal, StyleSheet, Text, View } from 'react-native'
import { EmojiText } from '../Game/EmojiText'
import { SolidButton } from '../Buttons/SolidButton'
import { colors, fonts } from '../../constants'

export function WinModal({ level, mode, isNewUnlocked }) {
    const goLevels = () => {
        router.push('/levels?mode=' + mode)
    }

    return (
        <Modal animationType='slide' transparent={true} statusBarTranslucent>
            <View style={styles.container}>
                <View style={styles.modal}>
                    <Text style={styles.title}>
                        ¡Nivel completado!
                    </Text>
                    <View style={styles.emojisContainer}>
                        {level.emojis?.map((emoji, index) => (
                            <EmojiText key={index} emoji={emoji} />
                        ))}
                    </View>
                    <Text style={styles.answer}>
                        {level.title}
                    </Text>
                    {isNewUnlocked && (
                        <>
                            <Text style={styles.subtitle}>
                                Haz desbloqueado el siguiente nivel.
                            </Text>
                            <View style={styles.moneyContainer}>
                                <Text style={styles.moneyText}>+5</Text>
                                <Text style={styles.plusIcon}>💵</Text>
                            </View>
                        </>
                    )}
                    <SolidButton
                        onPress={goLevels}
                        label='Continuar'
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal: {
        width: '90%',
        padding: 32,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundCard,
    },
    title: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        fontFamily: fonts.bold,
    },
    emojisContainer: {
        gap: 10,
        width: '100%',
        marginVertical: 16,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    answer: {
        fontSize: 28,
        marginBottom: 16,
        textAlign: 'center',
        fontFamily: fonts.bold,
        color: colors.borderContainer,
    },
    subtitle: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        fontFamily: fonts.medium,
    },
    moneyContainer: {
        flexDirection: 'row',
        gap: 4,
        borderWidth: 3,
        borderRadius: 20,
        marginVertical: 16,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.borderMoneyShadow,
        backgroundColor: colors.backgroundMoneyContainer,
    },
    moneyText: {
        fontSize: 14,
        marginRight: 24,
        color: colors.textCard,
        fontFamily: fonts.bold,
    },
    plusIcon: {
        position: 'absolute',
        top: -10,
        right: 0,
        fontSize: 28,
        textAlign: 'center',
        textAlignVertical: 'center',
        transform: [{ rotate: '-45deg' }],
    },
})