import { Stack } from 'expo-router'

export default function LevelsLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    backgroundColor: '#2c71e1',
                },

                headerTitleStyle: {
                    fontSize: 24,
                    fontWeight: 'bold',
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
