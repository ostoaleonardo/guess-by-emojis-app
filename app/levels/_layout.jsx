import { Stack } from 'expo-router'

export default function LevelsLayout() {
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
                    title: 'Niveles',
                }}
            />
        </Stack>
    )
}
