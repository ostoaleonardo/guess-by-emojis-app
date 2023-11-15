import { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ItemStoreCard } from '../../src/components/ItemStoreCard'
import { BuyModal } from '../../src/components/BuyModal'
import { items } from '../../src/contants/ui'
import usePowerUps from '../../src/hooks/usePowerUps'
import { MoneyAdCard } from '../../src/components/MoneyAdCard'

const dollarSection = require('../../assets/images/dollar-section.png')
const powerUpsSection = require('../../assets/images/power-ups-section.png')

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
            {isBuying &&
                <BuyModal
                    onPress={() => toggleModal()}
                    powerUp={selectedItem}
                />
            }
            <ScrollView
                style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
                overScrollMode='never'
            >
                <View style={styles.viewContainer}>
                    <Image source={dollarSection} style={styles.imageSection} />
                    <MoneyAdCard />

                    <Image source={powerUpsSection} style={styles.imageSection} />
                    <View style={styles.powerUpsContainer}>
                        {items.map((item, index) => (
                            <ItemStoreCard
                                key={index}
                                item={item}
                                count={powerUps[item.id] ? powerUps[item.id].count : 0}
                                onPress={() => toggleModal(item)}
                            />
                        ))}
                    </View>
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
    imageSection: {
        width: '100%',
        marginVertical: -40,
        resizeMode: 'contain',
    },
    sectionText: {
        position: 'absolute',
        zIndex: 2,
        top: 28,
        fontSize: 16,
        color: 'white',
        fontFamily: 'Rubik-Medium',
    },
    scrollContainer: {
        width: '100%',
        height: '100%',
    },
    viewContainer: {
        width: '100%',
        height: '100%',
        padding: 24,
    },
    powerUpsContainer: {
        width: '100%',
        gap: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})
