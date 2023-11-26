import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../contants/theme'

export function SolidButton({ label, variant, onPress }) {
    const styles = getStyles(variant)

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.95 : 1 }] }, styles.pressContainer]}
        >
            <View style={styles.labelContainer}>
                <Text style={styles.label}>
                    {label}
                </Text>
            </View>
        </Pressable>
    )
}

const getStyles = (variant) => {
    let backgroundButton, borderButton, borderShadow, backgroundShadow, textColor, borderWidthButton

    switch (variant) {
        case 'primary':
            borderShadow = colors.borderShadow
            backgroundShadow = colors.backgroundShadow
            borderButton = colors.shadowCard
            backgroundButton = colors.shadowCard
            textColor = colors.letter
            borderWidthButton = 4
            break
        default:
            borderShadow = colors.borderShadow
            backgroundShadow = colors.backgroundShadow
            borderButton = colors.borderContainer
            backgroundButton = colors.backgroundContainer
            textColor = colors.letter
            borderWidthButton = 4
            break
    }

    return StyleSheet.create({
        pressContainer: {
            width: '100%',
            height: 60,
            borderRadius: 16,
            alignItems: 'center',
            borderWidth: 4,
            borderColor: borderShadow,
            backgroundColor: backgroundShadow,
        },
        labelContainer: {
            position: 'absolute',
            zIndex: 2,
            width: '100%',
            height: '90%',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: borderButton,
            borderWidth: borderWidthButton,
            backgroundColor: backgroundButton,
        },
        label: {
            fontSize: 16,
            color: textColor,
            fontFamily: fonts.medium,
        },
    })
}
