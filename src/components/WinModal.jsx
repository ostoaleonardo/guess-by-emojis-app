import { router } from 'expo-router'
import { Modal, StyleSheet, Text, View } from 'react-native'
import { SolidButton } from './SolidButton'
import { EmojiText } from './EmojiText'

export function WinModal({ level, mode }) {
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
                    <Text style={styles.subtitle}>
                        Haz desbloqueado el siguiente nivel.
                    </Text>
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
        backgroundColor: 'white',
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        fontFamily: 'Rubik-Bold',
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
        fontSize: 24,
        marginBottom: 16,
        color: '#3177ff',
        textAlign: 'center',
        fontFamily: 'Rubik-Bold',
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 32,
        textAlign: 'center',
        fontFamily: 'Rubik-Medium',
    },
})