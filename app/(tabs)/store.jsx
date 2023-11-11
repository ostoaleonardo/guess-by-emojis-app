import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { ItemStoreCard } from '../../src/components/ItemStoreCard'
import { items } from '../../src/contants/ui'

const image = require('../../assets/images/header.png')

export default function Store() {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.imageHeader} />
            <ScrollView
                style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
                overScrollMode='never'
            >
                <View style={styles.viewContainer}>
                    {items.map((item, index) => (
                        <ItemStoreCard key={index} item={item} />
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
        gap: 8,
        width: '100%',
        height: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 24,
    },
})
