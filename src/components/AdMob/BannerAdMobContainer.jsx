import { StyleSheet, View } from 'react-native'
import { BannerAdMob } from './BannerAdMob'
import { colors } from '../../constants'

export function BannerAdMobContainer({ children }) {
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
        alignItems: 'center',
        backgroundColor: colors.backgroundScreen,
    },
})
