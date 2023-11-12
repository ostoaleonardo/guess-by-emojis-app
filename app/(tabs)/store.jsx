import { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { ItemStoreCard } from '../../src/components/ItemStoreCard'
import { BuyModal } from '../../src/components/BuyModal'
import { items } from '../../src/contants/ui'
import usePowerUps from '../../src/hooks/usePowerUps'
import useMoney from '../../src/hooks/useMoney'

const image = require('../../assets/images/header.png')

export default function Store() {
    const [isBuying, setIsBuying] = useState(false)
    const [selectedItem, setSelectedItem] = useState({})
    const { powerUps, initPowerUps } = usePowerUps()

    useEffect(() => {
        const loadPowerUps = async () => {
            await initPowerUps()
        }

        loadPowerUps()
    }, [])

    const toggleModal = (powerUp) => {
        setSelectedItem(powerUp)
        setIsBuying(!isBuying)
    }

    return (
        <View style={styles.container}>
            {isBuying && <BuyModal onPress={() => toggleModal()} powerUp={selectedItem} />}
            <Image source={image} style={styles.imageHeader} />
            <ScrollView
                style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
                overScrollMode='never'
            >
                <View style={styles.viewContainer}>
                    {items.map((item, index) => (
                        <ItemStoreCard
                            key={index}
                            item={item}
                            count={powerUps[item.id] ? powerUps[item.id].count : 0}
                            onPress={() => toggleModal(item)}
                        />
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
