import { router } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'

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
                <View style={styles.emojiContainer}>
                    <Text style={styles.emojiText}>
                        {item.emoji}
                    </Text>
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
        width: '96%',
        height: '100%',
        borderRadius: 16,
        backgroundColor: '#e4e3f1',
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
        backgroundColor: 'white',
    },
    emojiContainer: {
        width: 60,
        height: 60,
        aspectRatio: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emojiText: {
        fontSize: 32,
        textAlign: 'center',
    },
    titleContainer: {
        marginLeft: 16,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Rubik-Medium',
    },
    subtitle: {
        fontSize: 14,
        color: '#555',
        fontFamily: 'Rubik-Medium',
    },
    levelsContainer: {
        position: 'absolute',
        top: 16,
        right: 16,
        backgroundColor: '#e4e3f1',
        borderRadius: 10,
        paddingHorizontal: 8,
    },
    levels: {
        fontSize: 12,
        fontFamily: 'Rubik-Medium',
    },
})
