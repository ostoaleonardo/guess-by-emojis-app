import { useCallback, useState } from 'react'
import { useFocusEffect } from 'expo-router'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { BannerAdMobContainer, Logo, ModeCard } from '../src/components'
import { fonts, modes } from '../src/constants'
import useLevels from '../src/hooks/useLevels'
import 'expo-dev-client'

export default function App() {
    const { getUnlockedLevels } = useLevels()
    const [completedLevels, setCompletedLevels] = useState({})

    useFocusEffect(
        useCallback(() => {
            const checkLockedCategory = async () => {
                const levels = await getUnlockedLevels()
                setCompletedLevels(levels)
            }

            checkLockedCategory()
        }, [])
    )

    return (
        <BannerAdMobContainer>
            <ScrollView
                overScrollMode='never'
                style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <Logo />
                <View style={styles.viewContainer}>
                    <Text style={styles.title}>
                        Categorias
                    </Text>
                    {modes.map((item, index) => (
                        <ModeCard
                            key={index}
                            item={item}
                            completedLevels={completedLevels[item.mode]?.length - 1}
                        />
                    ))}
                </View>
            </ScrollView>
        </BannerAdMobContainer>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        width: '100%',
        maxWidth: 450,
        height: '100%',
    },
    viewContainer: {
        width: '100%',
        height: '100%',
        gap: 8,
        padding: 24,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        width: '100%',
        fontSize: 24,
        fontFamily: fonts.bold,
    },
})
