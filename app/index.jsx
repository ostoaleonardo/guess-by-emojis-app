import { useCallback, useState } from 'react'
import { useFocusEffect } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { BannerAdMobContainer, Logo, CategoryCard } from '../src/components'
import { categories, fonts } from '../src/constants'
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
                    {Object.keys(categories).map((category, index) => (
                        <CategoryCard
                            key={index}
                            name={category}
                            mode={categories[category]}
                            completedLevels={completedLevels[category]?.length - 1 || 0}
                        />
                    ))}
                    <View style={{ width: '31%' }} />
                </View>
            </ScrollView>
            <StatusBar hidden={true} />
        </BannerAdMobContainer >
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
