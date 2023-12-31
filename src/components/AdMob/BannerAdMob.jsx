import NetInfo from '@react-native-community/netinfo'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads'

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-5454307717540089/9669228618'

export function BannerAdMob() {
    const { isConnected } = NetInfo.useNetInfo()
    
    if (!isConnected) return null
    return null

    return (
        <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            requestOptions={{
                requestNonPersonalizedAdsOnly: true,
            }}
        />
    )
}