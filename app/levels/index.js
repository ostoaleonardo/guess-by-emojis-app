import { useCallback, useEffect, useState } from 'react'
import { useGlobalSearchParams, useFocusEffect, useRouter } from 'expo-router'
import { ScrollView, StyleSheet, View } from 'react-native'
import { BannerAdMobContainer, EmojiLevel } from '../../src/components'
import { getMode } from '../../src/utils/getMode'
import useLevels from '../../src/hooks/useLevels'

export default function Levels() {
    const router = useRouter()
    const params = useGlobalSearchParams()
    const mode = getMode(params.mode).levels
    const [level, setLevel] = useState([])
    const { getLevelsByCategory } = useLevels()

    useEffect(() => {
        const title = getMode(params.mode).title
        router.setParams({ title })
    }, [])

    useFocusEffect(
        useCallback(() => {
            const checkLockedCategory = async () => {
                const levels = await getLevelsByCategory(params.mode)
                setLevel(levels)
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
                <View style={styles.levelsContainer}>
                    {level.length > 0 && mode.map((item, index) => (
                        <EmojiLevel
                            key={index}
                            item={item}
                            mode={params.mode}
                            isUnlocked={level[index]?.unlocked}
                        />
                    ))}
                </View>
            </ScrollView>
        </BannerAdMobContainer>
    )
}

const styles = StyleSheet.create({
    levelsContainer: {
        flex: 1,
        maxWidth: 450,
        gap: 10,
        padding: 20,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
