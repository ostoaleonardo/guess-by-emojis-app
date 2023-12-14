import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, fonts, images } from '../../constants'

export function PowerUp({ onPress, item }) {
    const styles = getStyles(item.id)

    return (
        <Pressable
            style={styles.pressContainer}
            onPress={onPress ?? null}
        >
            <View style={styles.powerContainer}>
                <Image source={item.emoji} style={styles.emoji} />
                <View style={styles.coinContainer}>
                    <Image source={images.emptyCoin} style={styles.coinIcon} />
                    <Text style={styles.coinText}>{item.price}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const getStyles = (variant) => {
    let backgroundButton, borderButton, textColor

    switch (variant) {
        case 1:
            borderButton = colors.borderPower1
            backgroundButton = colors.backgroundPower1
            textColor = colors.white
            break
        case 2:
            borderButton = colors.borderPower2
            backgroundButton = colors.backgroundPower2
            textColor = colors.white
            break
        case 3:
            borderButton = colors.borderPower3
            backgroundButton = colors.backgroundPower3
            textColor = colors.white
            break
    }

    return StyleSheet.create({
        pressContainer: {
            width: 70,
            height: 70,
            borderRadius: 20,
            backgroundColor: borderButton,
        },
        powerContainer: {
            position: 'absolute',
            zIndex: 2,
            width: '100%',
            height: '94%',
            borderWidth: 3,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: borderButton,
            backgroundColor: backgroundButton,
        },
        emoji: {
            width: 28,
            height: 28,
        },
        coinContainer: {
            position: 'absolute',
            zIndex: 6,
            top: -15,
            right: -15,
            alignItems: 'center',
            justifyContent: 'center',
        },
        coinIcon: {
            width: 40,
            height: 40,
        },
        coinText: {
            position: 'absolute',
            fontSize: 16,
            color: textColor,
            fontFamily: fonts.bold,
        },
    })
}
