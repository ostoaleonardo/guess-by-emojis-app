import { router } from 'expo-router'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../constants'

export function ModeCard({ item }) {
    const goLevels = () => {
        router.push('/levels?mode=' + item.mode)
    }

    return (
        <Pressable
            onPress={goLevels}
            style={styles.pressContainer}
        >
            <View style={styles.shadow} />
            <View style={styles.container}>
                <View style={styles.reflection} />
                <View style={styles.emojiContainer}>
                    <Image source={item.emoji} style={styles.emoji} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {item.title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {item.description}
                    </Text>
                </View>
                <View style={styles.levelsContainer}>
                    <Text style={styles.levels}>
                        {item.levels}
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
        height: '94%',
        padding: 16,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.backgroundCard,
        overflow: 'hidden',
    },
    reflection: {
        position: 'absolute',
        left: -10,
        width: 85,
        height: '200%',
        opacity: 0.1,
        transform: [{ rotate: '20deg' }],
        backgroundColor: colors.backgroundContainer,
    },
    emojiContainer: {
        width: 60,
        height: 60,
        aspectRatio: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emoji: {
        width: 48,
        height: 48,
    },
    titleContainer: {
        marginLeft: 16,
    },
    title: {
        fontSize: 16,
        color: colors.textCard,
        fontFamily: fonts.medium,
    },
    subtitle: {
        fontSize: 12,
        opacity: 0.5,
        color: colors.textCard,
        fontFamily: fonts.medium,
    },
    levelsContainer: {
        position: 'absolute',
        top: 16,
        right: 16,
        borderRadius: 10,
        paddingHorizontal: 8,
        backgroundColor: colors.backgroundContainer,
    },
    levels: {
        fontSize: 12,
        color: colors.textCard,
        fontFamily: fonts.medium,
    },
})
