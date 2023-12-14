import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../constants'

export function SolidButton({ label, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.95 : 1 }] }, styles.pressContainer]}
        >
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressContainer: {
        width: '100%',
        height: 60,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primaryButton,
    },
    label: {
        fontSize: 24,
        fontFamily: fonts.bold,
        color: colors.whiteColor,
    },
})
