import { router } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { SolidButton } from './SolidButton'

export function WinModal({ mode }) {
    const goLevels = () => {
        router.push('/levels?mode=' + mode)
    }

    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.shadow} />
                <View style={styles.content}>
                    <Text style={styles.title}>
                        ¡Correcto!
                    </Text>
                    <Text style={styles.subtitle}>
                        Haz desbloqueado el siguiente nivel.
                    </Text>
                    <SolidButton
                        onPress={goLevels}
                        label='Ir a los niveles'
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal: {
        position: 'relative',
        width: '90%',
        height: 250,
    },
    content: {
        position: 'absolute',
        width: '100%',
        zIndex: 2,
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
    subtitle: {
        fontSize: 18,
        marginBottom: 32,
        textAlign: 'center',
        fontFamily: 'Rubik-Medium',
    },
})