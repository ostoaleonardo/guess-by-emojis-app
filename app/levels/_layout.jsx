import { Stack } from 'expo-router'
import { colors, fonts } from '../../src/contants/theme'

export default function LevelsLayout() {
    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,

                headerStyle: {
                    backgroundColor: colors.backgroundHeader,
                },

                headerTitleStyle: {
                    fontSize: 24,
                    fontFamily: fonts.bold,
                },

                headerTintColor: 'white',
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen
                name='index'
                options={{
                    title: 'Niveles',
                }}
            />
        </Stack>
    )
}
