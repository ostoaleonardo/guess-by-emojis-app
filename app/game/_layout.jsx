import { Stack } from 'expo-router'


export default function GameLayout() {
    return (
        <Stack
            screenOptions={{
                // headerShown: false,
            }}
        >
            <Stack.Screen name='index' options={{ headerTitle: '' }} />
        </Stack>
    )
}