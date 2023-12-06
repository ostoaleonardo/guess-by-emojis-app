import { router } from 'expo-router'
import { Image, Modal, StyleSheet, Text, View } from 'react-native'
import { EmojiCard } from '../Game/EmojiCard'
import { SolidButton } from '../Buttons/SolidButton'
import { colors, fonts, images } from '../../constants'

export function WinModal({ level, mode, isNewUnlocked }) {
    const goLevels = () => {
        router.push('/levels?mode=' + mode)
    }

    return (
        <Modal animationType='slide' transparent={true} statusBarTranslucent>
            <View style={styles.background} />
            <View style={styles.modal}>
                <Text style={styles.title}>
                    ¡Nivel completado!
                </Text>
                <View style={styles.emojisContainer}>
                    {level.emojis?.map((emoji, index) => (
                        <EmojiCard key={index} emoji={emoji} />
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
                            <Image source={images.dollars} style={styles.dollarIcon} />
                        </View>
                    </>
                )}
                <SolidButton
                    onPress={goLevels}
                    label='Continuar'
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
        width: '90%',
        maxWidth: 450,
        padding: 32,
        borderRadius: 24,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
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
    dollarIcon: {
        position: 'absolute',
        top: -6,
        right: 0,
        width: 32,
        height: 32,
        transform: [{ rotate: '-45deg' }],
    },
})