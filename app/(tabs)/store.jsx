import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ItemStoreCard } from '../../src/components/ItemStoreCard'
import { BuyModal } from '../../src/components/BuyModal'
import { MoneyAdCard } from '../../src/components/MoneyAdCard'
import { items } from '../../src/contants/ui'
import { colors, fonts } from '../../src/contants/theme'
import usePowerUps from '../../src/hooks/usePowerUps'

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
            {/* <ImageBackground source={home} style={{ position: 'absolute', width: '100%', height: '100%' }} /> */}
            <ScrollView
                overScrollMode='never'
                style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.viewContainer}>
                    <View style={styles.sectionTitleContainer}>
                        <View style={styles.sectionTextContainer}>
                            <View style={styles.reflection} />
                            <Text style={styles.titleSection}>Billetes gratis</Text>
                        </View>
                        <View style={styles.sectionShadow} />
                    </View>
                    <View style={styles.sectionContainer}>
                        <MoneyAdCard />
                    </View>

                    <View style={styles.sectionTitleContainer}>
                        <View style={styles.sectionTextContainer}>
                            <View style={styles.reflection} />
                            <Text style={styles.titleSection}>Power Ups</Text>
                        </View>
                        <View style={styles.sectionShadow} />
                    </View>
                    <View style={styles.sectionContainer}>
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
        backgroundColor: colors.backgroundScreen,
    },
    sectionTitleContainer: {
        width: '100%',
        overflow: 'hidden',
        backgroundColor: colors.backgroundCard,
    },
    sectionTextContainer: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionShadow: {
        width: '100%',
        height: 8,
        backgroundColor: colors.shadowCard,
    },
    titleSection: {
        fontSize: 18,
        color: colors.textCard,
        fontFamily: fonts.bold,
    },
    reflection: {
        position: 'absolute',
        left: -150,
        width: '100%',
        height: '300%',
        opacity: 0.1,
        backgroundColor: colors.shadow,
        transform: [{ rotate: '-45deg' }],
    },
    scrollContainer: {
        width: '100%',
        height: '100%',
    },
    viewContainer: {
        width: '100%',
        height: '100%',
        paddingBottom: 16,
        alignItems: 'center',
    },
    sectionContainer: {
        width: '100%',
        gap: 8,
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 24,
        justifyContent: 'space-between',
    },
})
