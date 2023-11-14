import { Pressable, StyleSheet, Text, View } from 'react-native'

export function SolidButton({ label, variant = 'primary', onPress }) {
    const styles = getStyles(variant)

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.95 : 1 }] }, styles.pressContainer]}
            android_ripple={{ color: 'rgba(255, 255, 255, 0.3)', borderless: true }}
        >
            <View style={styles.buttonContainer}>
                <View style={styles.shadow} />
                <View style={styles.content}>
                    <Text style={styles.label}>
                        {label}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

const getStyles = (variant) => {
    let buttonColor, buttonBorder, textColor

    switch (variant) {
        case 'primary':
            buttonColor = '#3177ff'
            buttonBorder = '#1e60e0'
            textColor = 'white'
            break
        case 'secondary':
            buttonColor = 'white'
            buttonBorder = '#e4e3f1'
            textColor = 'black'
            break
        default:
            buttonColor = '#3177ff'
            buttonBorder = '#1e60e0'
            textColor = 'white'
            break
    }

    return StyleSheet.create({
        pressContainer: {
            width: '100%',
            height: 70,
        },
        buttonContainer: {
            width: '100%',
            height: '100%',
            position: 'relative',
        },
        shadow: {
            width: '100%',
            height: '96%',
            borderRadius: 16,
            backgroundColor: buttonBorder,
        },
        content: {
            position: 'absolute',
            zIndex: 2,
            width: '100%',
            height: '90%',
            borderWidth: 4,
            borderRadius: 18,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: buttonBorder,
            backgroundColor: buttonColor,
        },
        label: {
            fontSize: 18,
            color: textColor,
            fontFamily: 'Rubik-Medium',
        },
    })
}
