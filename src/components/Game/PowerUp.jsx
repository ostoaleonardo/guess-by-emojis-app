import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../constants'
import Animated from 'react-native-reanimated'
import useBounceAnimation from '../../hooks/useBounceAnimation'

export function PowerUp({ onPress, item, count }) {
    const animatedStyle = useBounceAnimation(count)

    return (
        <Pressable
            style={styles.pressContainer}
            onPress={onPress ?? null}
        >
            <View style={styles.cardContainer}>
                <View style={styles.shadow} />
                <View style={styles.powerContainer}>
                    <View style={styles.reflection} />
                    <Text style={styles.emoji}>
                        {item.emoji}
                    </Text>
                    <Animated.Text style={[styles.count, animatedStyle]}>
                        {'x' + count}
                    </Animated.Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressContainer: {
        width: '30%',
        height: 60,
    },
    cardContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow: {
        width: '100%',
        height: '100%',
        borderWidth: 4,
        borderRadius: 16,
        borderColor: colors.borderShadow,
        backgroundColor: colors.backgroundShadow,
    },
    powerContainer: {
        position: 'absolute',
        zIndex: 2,
        top: 2,
        width: '90%',
        height: '82%',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        borderWidth: 3,
        overflow: 'hidden',
        justifyContent: 'space-between',
        borderColor: colors.borderContainer,
        backgroundColor: colors.backgroundContainer,
    },
    reflection: {
        position: 'absolute',
        left: 10,
        width: 25,
        height: '150%',
        opacity: 0.2,
        backgroundColor: colors.backgroundCard,
        transform: [{ rotate: '20deg' }],
    },
    emoji: {
        fontSize: 16,
    },
    count: {
        fontSize: 16,
        fontFamily: fonts.bold,
        color: colors.letter,
    },
})
