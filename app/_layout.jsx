import { useCallback, useEffect } from 'react'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { movies, series, characters, videogames, brands, countries } from '../src/contants/emojis'
import { Providers } from './providers'
import useLockLevels from '../src/hooks/useLockLevels'

export default function AppLayout() {
    const { lockLevels } = useLockLevels()
    const [fontsLoaded, fontError] = useFonts({
        'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
        'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
    })

    useEffect(() => {
        const loadFont = async () => {
            await SplashScreen.preventAutoHideAsync()
        }

        loadFont()
        lockLevelsByCategory()
    }, [])

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded, fontError])

    const lockLevelsByCategory = () => {
        const categories = ['movies', 'series', 'characters', 'videogames', 'brands', 'countries']
        const levels = [movies, series, characters, videogames, brands, countries]

        categories.forEach((category, index) => {
            lockLevels(category, levels[index])
        })
    }

    if (!fontsLoaded) {
        return null
    }

    return (
        <Providers>
            <Stack
                screenOptions={{
                    headerShown: false,
                    navigationBarHidden: true,
                    statusBarTranslucent: true,
                }}
                onLayout={onLayoutRootView}
            >
                <Stack.Screen name='(tabs)' />
            </Stack>
        </Providers>
    )
}
