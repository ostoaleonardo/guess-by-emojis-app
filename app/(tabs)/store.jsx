import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { BannerAdMobContainer, ItemStoreCard, MoneyAdCard, BuyModal } from '../../src/components'
import { colors, fonts, powers } from '../../src/constants'
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
        <BannerAdMobContainer>
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
                        {powers.map((item, index) => (
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
            {isBuying && <BuyModal onPress={() => toggleModal()} powerUp={selectedItem} />}
        </BannerAdMobContainer>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        width: '100%',
        height: '100%',
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
    viewContainer: {
        width: '100%',
        height: '100%',
        paddingBottom: 16,
        alignItems: 'center',
    },
    sectionContainer: {
        width: '100%',
        maxWidth: 450,
        gap: 8,
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 24,
        justifyContent: 'space-between',
    },
})
