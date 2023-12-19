import { Stack, useLocalSearchParams } from 'expo-router'
import { MoneyChipButton } from '../../src/components'
import { colors, fonts } from '../../src/constants'

export default function LevelsLayout() {
    const params = useLocalSearchParams()

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

                headerRight: () => (
                    <MoneyChipButton />
                ),
            }}
        >
            <Stack.Screen
                name='index'
                options={{
                    headerTitle: params.title ?? '',
                }}
            />
        </Stack>
    )
}
