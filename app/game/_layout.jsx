import { Stack } from 'expo-router'


export default function GameLayout() {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerTitle: '' }} />
        </Stack>
    )
}
