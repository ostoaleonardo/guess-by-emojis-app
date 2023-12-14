import { Stack } from 'expo-router'
import { MoneyChipButton } from '../../src/components'
import { colors, fonts } from '../../src/constants'

export default function LevelsLayout() {
    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,

                headerStyle: {
                    backgroundColor: colors.floralWhite,
                },

                headerTitleStyle: {
                    fontSize: 24,
                    fontFamily: fonts.bold,
                    color: colors.crayola,
                },

                headerTitleAlign: 'center',
                headerTintColor: colors.crayola,

                headerRight: () => (
                    <MoneyChipButton />
                ),
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
