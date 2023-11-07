import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { ModeCard } from '../../src/components/ModeCard'
import { modes } from '../../src/contants/ui'

const image = require('../../assets/images/header.png')

export default function Home() {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.imageHeader} />
            <ScrollView
                style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
                overScrollMode='never'
            >
                <View style={styles.viewContainer}>
                    {modes.map((item, index) => (
                        <ModeCard key={index} item={item} />
                    ))}
                </View>
            </ScrollView>
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
    scrollContainer: {
        width: '100%',
        height: '100%',
    },
    viewContainer: {
        width: '100%',
        height: '100%',
        padding: 24,
        gap: 8,
    },
})
