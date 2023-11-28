import { StyleSheet, View } from 'react-native'
import { BannerAdMob } from './BannerAdMob'
import { colors } from '../contants/theme'

export function BannerAdMobContainer({children}) {
    return (
        <View style={styles.container}>
            {children}
            <BannerAdMob />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundScreen,
    },
})
