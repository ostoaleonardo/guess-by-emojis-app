import { Tabs } from 'expo-router/tabs'
export default function AppLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    href: '/',
                    title: 'Home',
                }}
            />
        </Tabs>
    )
}
