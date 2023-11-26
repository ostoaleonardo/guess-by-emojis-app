import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../contants/theme'

export function Alert({ label }) {
    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <Text style={styles.title}>
                    {label}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 3,
        bottom: 16,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        width: '90%',
        padding: 18,
        borderWidth: 3,
        borderRadius: 24,
        borderColor: colors.borderContainer,
        backgroundColor: colors.backgroundCard,
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        color: colors.textCard,
        fontFamily: fonts.medium,
    },
})