import { Pressable, Text, View } from 'react-native'
import { StyleSheet } from 'react-native'

export function SolidButton({ label, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.95 : 1 }] }, styles.pressContainer]}
            android_ripple={{ color: 'rgba(255, 255, 255, 0.3)', borderless: true }}
        >
            <View style={styles.buttonContainer}>
                <View style={styles.shadowLeft} />
                <View style={styles.content}>
                    <Text style={styles.label}>
                        {label}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressContainer: {
        width: '100%',
        height: 70,
    },
    buttonContainer: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    shadowLeft: {
        width: '100%',
        height: '96%',
        borderRadius: 16,
        backgroundColor: '#e4e3f1',
    },
    content: {
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        height: '90%',
        borderWidth: 4,
        borderRadius: 18,
        borderColor: '#e4e3f1',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    label: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'Rubik-Medium',
    },
})
