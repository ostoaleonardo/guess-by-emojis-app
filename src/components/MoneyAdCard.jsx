import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../contants/theme'

export function MoneyAdCard() {
    return (
        <Pressable style={styles.pressContainer}>
            <View style={styles.shadow} />
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <View style={styles.titleContainer}>
                        <View style={styles.shadowTitle} />
                        <View style={styles.nameContainer}>
                            <Text style={styles.title}>
                                ¡Gana billetes gratis!
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.subtitle}>
                        Mira un anuncio y gana 5 billetes
                    </Text>
                </View>
                <View style={styles.emojiContainer}>
                    <Text style={styles.emojiText}>
                        💸
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressContainer: {
        position: 'relative',
        width: '100%',
        height: 110,
        alignItems: 'center',
    },
    shadow: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
        backgroundColor: colors.shadowCard,
    },
    container: {
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        height: '95%',
        padding: 16,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.backgroundCard,
        overflow: 'hidden',
    },
    emojiContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emojiText: {
        position: 'absolute',
        right: -30,
        fontSize: 84,
        textAlign: 'center',
        transform: [{ rotate: '-45deg' }],
    },
    textContainer: {
        flex: 2,
        gap: 4,
        marginLeft: 8,
    },
    titleContainer: {
        width: '85%',
        height: 35,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadowTitle: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
        backgroundColor: colors.borderMoneyShadow,
    },
    nameContainer: {
        position: 'absolute',
        top: 0,
        zIndex: 2,
        width: '100%',
        height: '85%',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: colors.borderMoneyContainer,
        backgroundColor: colors.backgroundMoneyContainer,
    },
    title: {
        fontSize: 12,
        textAlign: 'center',
        color: colors.textCard,
        fontFamily: fonts.medium,
    },
    subtitle: {
        fontSize: 12,
        opacity: 0.7,
        color: colors.textCard,
        fontFamily: fonts.medium,
    },
})
