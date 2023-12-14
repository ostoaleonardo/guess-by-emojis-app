import { useEffect, useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads'
import { colors, fonts, images } from '../../constants'

const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-5454307717540089/4514455922'

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
})

export function AdButton() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        loadRewarded()
    }, [])

    const loadRewarded = () => {
        const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
            setLoaded(true)
        })

        const unsubscribeEarned = rewarded.addAdEventListener(RewardedAdEventType.EARNED_REWARD, () => {
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
            onPress={loaded ? () => rewarded.show() : null}
            style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.95 : 1 }] }, styles.pressContainer]}
        >
            <View style={styles.contentContainer}>
                <Image source={images.filmFrames} style={styles.coinIcon} />
                <Text style={styles.label}>
                    Gratis
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressContainer: {
        width: '60%',
        height: 50,
        borderRadius: 18,
        backgroundColor: colors.secondaryButton,
    },
    contentContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    coinIcon: {
        width: 40,
        height: 40,
        marginRight: 8,
    },
    label: {
        fontSize: 24,
        fontFamily: fonts.bold,
        color: colors.textCard,
    },
})
