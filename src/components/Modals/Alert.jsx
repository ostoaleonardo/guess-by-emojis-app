import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../constants'

export function Alert({ label }) {
    return (
        <Animated.View
            style={styles.container}
            entering={SlideInDown} exiting={SlideOutDown}
        >
            <View style={styles.modal}>
                <Text style={styles.title}>
                    {label}
                </Text>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 4,
        bottom: 16,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        width: '90%',
        padding: 18,
        borderWidth: 1,
        borderRadius: 24,
        borderColor: colors.lightGray,
        backgroundColor: colors.white,
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        color: colors.crayola,
        fontFamily: fonts.medium,
    },
})