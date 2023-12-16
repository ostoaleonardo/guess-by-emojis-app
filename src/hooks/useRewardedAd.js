import { useContext, useEffect } from 'react'
import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads'
import { RewardedAdContext } from '../context/rewardedAdContext'

const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-5454307717540089/4514455922'

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
})

export default function useRewardedAd(onEarnedReward) {
    const { loaded, setLoaded } = useContext(RewardedAdContext)

    useEffect(() => {
        loadRewarded()
    }, [])

    const loadRewarded = () => {
        const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
            setLoaded(true)
        })

        const unsubscribeEarned = rewarded.addAdEventListener(RewardedAdEventType.EARNED_REWARD, () => {
            onEarnedReward()
            setLoaded(false)
        })

        rewarded.load()

        return () => {
            unsubscribeLoaded()
            unsubscribeEarned()
        }
    }

    const showRewarded = () => {
        rewarded.show()
    }

    return { loaded, showRewarded }
}
