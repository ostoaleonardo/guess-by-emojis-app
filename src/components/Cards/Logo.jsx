import { Image, StyleSheet, View } from 'react-native'
import { images } from '../../constants'

export function Logo() {
    return (
        <View style={styles.container}>
            <Image source={images.logo} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 200,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        resizeMode: 'contain',
    },
})
