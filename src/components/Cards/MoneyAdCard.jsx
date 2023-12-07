import { useEffect, useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads'
import { colors, fonts, images } from '../../constants'
import useMoney from '../../hooks/useMoney'

const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-5454307717540089/4514455922'

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
})

export function MoneyAdCard() {
    const [loaded, setLoaded] = useState(false)
    const { addMoney } = useMoney()

    useEffect(() => {
        loadRewarded()
    }, [])

    const loadRewarded = () => {
        const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
            setLoaded(true)
        })

        const unsubscribeEarned = rewarded.addAdEventListener(RewardedAdEventType.EARNED_REWARD, () => {
            addMoney(5)
            setLoaded(false)

            setTimeout(() => {
                rewarded.load()
            }, 1000)
        })

        rewarded.load()

        return () => {
            unsubscribeLoaded()
            unsubscribeEarned()
        }
    }

    return (
        <Pressable
            style={styles.pressContainer}
            onPress={loaded ? () => rewarded.show() : null}
        >
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <View style={styles.titleChipContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>
                                {loaded ? '¡Gana billetes gratis!'
                                    : '¡No hay anuncios disponibles!'
                                }
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.subtitle}>
                        {loaded ? '¡Mira un anuncio y gana 5 billetes!'
                            : '¡Vuelve mañana para ver más anuncios!'
                        }
                    </Text>
                </View>
                <View style={styles.emojiContainer}>
                    <Image source={images.moneyWithWings} style={styles.emoji} />
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
    emoji: {
        position: 'absolute',
        right: -42,
        bottom: -76,
        width: 128,
        height: 128,
    },
    textContainer: {
        flex: 2,
        gap: 4,
        marginLeft: 8,
    },
    titleChipContainer: {
        height: 35,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.borderMoneyShadow,
    },
    titleContainer: {
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
