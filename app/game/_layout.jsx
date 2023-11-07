import { Stack, useLocalSearchParams } from 'expo-router'

export default function GameLayout() {
    const params = useLocalSearchParams()

    return (
        <Stack
            screenOptions={{
                headerTransparent: true,

                headerShadowVisible: false,

                headerTitleStyle: {
                    fontSize: 24,
                    fontFamily: 'Rubik-Bold',
                },

                headerTintColor: 'white',
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen
                name='index'
                options={{
                    headerTitle: params.name ?? '',
                }}
            />
        </Stack>
    )
}
