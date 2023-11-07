import { Image, StyleSheet, View } from 'react-native'

const image = require('../../assets/images/header.png')

export default function Store() {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.imageHeader} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9f0ff',
    },
    imageHeader: {
        width: '100%',
        height: 100,
        resizeMode: 'stretch',
    },
})
