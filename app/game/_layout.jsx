import { Stack, useLocalSearchParams } from 'expo-router'
import { MoneyChipButton } from '../../src/components'
import { colors, fonts, images } from '../../src/constants'

export default function GameLayout() {
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

                headerTitleAlign: 'center',

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
