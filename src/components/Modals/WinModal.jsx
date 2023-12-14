import { router } from 'expo-router'
import { Image, Modal, StyleSheet, Text, View } from 'react-native'
import { EmojiCard } from '../Game/EmojiCard'
import { SolidButton } from '../Buttons/SolidButton'
import { colors, fonts, images } from '../../constants'
import { MoneyChip } from '../Cards/MoneyChip'

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
                            <MoneyChip money='+5' />
                        </View>
                    </>
                )}
                <SolidButton onPress={goLevels} label='Continuar' />
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
        borderRadius: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        backgroundColor: colors.backgroundCard,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: colors.textCard,
        fontFamily: fonts.bold,
    },
    emojisContainer: {
        gap: 10,
        padding: 16,
        marginVertical: 16,
        borderRadius: 28,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundScreen,
    },
    answer: {
        fontSize: 28,
        marginBottom: 16,
        textAlign: 'center',
        fontFamily: fonts.bold,
        color: colors.textCard,
    },
    subtitle: {
        fontSize: 16,
        color: colors.textCard,
        textAlign: 'center',
        fontFamily: fonts.medium,
    },
    moneyContainer: {
        marginTop: 16,
        marginBottom: 32,
    },
    moneyText: {
        fontSize: 18,
        marginRight: 40,
        fontFamily: fonts.bold,
        color: colors.textCard,
    },
    coinIcon: {
        position: 'absolute',
        zIndex: 3,
        top: -6,
        right: -6,
        width: 42,
        height: 42,
    },
})