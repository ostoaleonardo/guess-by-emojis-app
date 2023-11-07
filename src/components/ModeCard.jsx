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
                <View style={styles.image} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {item.title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {item.title}
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
    image: {
        width: 55,
        height: 55,
        aspectRatio: 1,
        borderRadius: 10,
        backgroundColor: '#eee'
    },
    titleContainer: {
        marginLeft: 16,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Rubik-Medium',
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Rubik-Medium',
    },
})
