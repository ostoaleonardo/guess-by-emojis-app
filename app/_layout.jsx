import { useCallback, useEffect } from 'react'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

export default function AppLayout() {
    const [fontsLoaded, fontError] = useFonts({
        'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
        'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
    })

    useEffect(() => {
        const loadFont = async () => {
            await SplashScreen.preventAutoHideAsync()
        }

        loadFont()
    }, [])

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded, fontError])

    if (!fontsLoaded) {
        return null
    }

    return (
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
    )
}
