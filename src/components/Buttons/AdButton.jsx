import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, fonts, images } from '../../constants'
import useRewardedAd from '../../hooks/useRewardedAd'

export function AdButton({ onEarnedReward }) {
    const { loaded, showRewarded } = useRewardedAd(onEarnedReward)

    return (
        <Pressable
            onPress={loaded ? showRewarded : null}
            style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.95 : 1 }] }, styles.pressContainer]}
        >
            <View style={styles.contentContainer}>
                <Image source={images.filmFrames} style={styles.coinIcon} />
                <Text style={styles.label}>
                    {loaded ? 'Gratis' : 'Cargando...'}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressContainer: {
        flex: 1,
        height: 60,
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
        width: 32,
        height: 32,
        marginRight: 8,
    },
    label: {
        fontSize: 22,
        fontFamily: fonts.bold,
        color: colors.crayola,
    },
})
