import { ScrollView, StyleSheet, View } from 'react-native'
import { BannerAdMobContainer } from '../../src/components/BannerAdMobContainer'
import { ModeCard } from '../../src/components/ModeCard'
import { modes } from '../../src/contants/ui'

export default function Home() {
    return (
        <BannerAdMobContainer>
            <ScrollView
                overScrollMode='never'
                style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.viewContainer}>
                    {modes.map((item, index) => (
                        <ModeCard key={index} item={item} />
                    ))}
                </View>
            </ScrollView>
        </BannerAdMobContainer>
    )
}

const styles = StyleSheet.create({
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
