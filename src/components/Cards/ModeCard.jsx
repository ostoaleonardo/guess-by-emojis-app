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
            <View style={styles.cardContainer}>
                <View style={styles.contentContainer}>
                    <View style={styles.emojiContainer}>
                        <Image source={item.emoji} style={styles.emoji} />
                    </View>
                    <View style={styles.levelsContainer}>
                        <Text style={styles.levels}>
                            1/{item.levels}
                        </Text>
                    </View>
                </View>
            </View>
            <Text style={styles.title}>
                {item.title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressContainer: {
        width: '31%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 32,
        overflow: 'hidden',
        backgroundColor: colors.lightGray,
    },
    contentContainer: {
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        height: '94%',
        borderWidth: 1,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.lightGray,
        backgroundColor: colors.white,
    },
    emojiContainer: {
        width: '90%',
        height: '90%',
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emoji: {
        width: 72,
        height: 72,
    },
    title: {
        fontSize: 16,
        color: colors.crayola,
        fontFamily: fonts.medium,
    },
    levelsContainer: {
        position: 'absolute',
        top: 24,
        right: -16,
        paddingEnd: 20,
        borderRadius: 10,
        paddingHorizontal: 4,
        backgroundColor: colors.crayola,
    },
    levels: {
        fontSize: 10,
        color: colors.white,
        fontFamily: fonts.medium,
    },
})
