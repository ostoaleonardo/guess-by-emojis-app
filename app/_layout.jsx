import { useCallback, useEffect } from 'react'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { Providers } from './providers'
import { MoneyChipButton } from '../src/components'
import { colors } from '../src/constants'

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
        <Providers>
            <Stack
                screenOptions={{
                    headerShadowVisible: false,

                    headerStyle: {
                        backgroundColor: colors.backgroundScreen,
                    },

                    headerRight: () => (
                        <MoneyChipButton />
                    ),
                }}
                onLayout={onLayoutRootView}
            >
                <Stack.Screen
                    name='index'
                    options={{
                        headerTitle: '',
                    }}
                />
                <Stack.Screen
                    name='levels'
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='game'
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
        </Providers>
    )
}
