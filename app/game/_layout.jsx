import { Stack, useLocalSearchParams } from 'expo-router'

export default function GameLayout() {
    const params = useLocalSearchParams()

    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    backgroundColor: 'white',
                },

                headerShadowVisible: false,

                headerTitleStyle: {
                    fontSize: 24,
                    fontWeight: 'bold',
                    fontFamily: 'Rubik-Bold',
                },

                headerTintColor: 'black',
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
