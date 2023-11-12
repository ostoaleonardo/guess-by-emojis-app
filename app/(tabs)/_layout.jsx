import { Tabs, usePathname } from 'expo-router'
import { Image, View } from 'react-native'
import { MoneyChip } from '../../src/components/MoneyChip'

const homeIcon = require('../../assets/icons/home.png')
const storeIcon = require('../../assets/icons/store.png')

export default function TabsLayout() {
    const pathname = usePathname()

    return (
        <Tabs
            screenOptions={{
                headerTransparent: true,

                headerTitleStyle: {
                    fontSize: 24,
                    fontFamily: 'Rubik-Bold',
                },

                headerTintColor: 'white',
                headerTitleAlign: 'center',

                tabBarStyle: {
                    height: 80,
                    backgroundColor: 'white',
                    borderColor: 'transparent',
                },

                tabBarLabelStyle: {
                    fontSize: 14,
                    fontFamily: 'Rubik-Bold',
                },

                tabBarShowLabel: false,
                
                headerRight: () => (
                    <MoneyChip />
                ),
            }}
        >
            <Tabs.Screen
                name='home'
                options={{
                    title: 'Modos de juego',
                    tabBarLabel: 'Inicio',
                    tabBarIcon: () => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={homeIcon}
                                style={{ width: 42, height: 42 }}
                            />
                            {pathname === '/home' && <View style={{ width: 10, height: 5, backgroundColor: '#212121', borderRadius: 10 }} />}
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name='store'
                options={{
                    title: 'Tienda',
                    tabBarIcon: () => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={storeIcon}
                                style={{ width: 42, height: 42 }}
                            />
                            {pathname === '/store' && <View style={{ width: 10, height: 5, backgroundColor: '#212121', borderRadius: 10 }} />}
                        </View>
                    ),
                }}
            />
        </Tabs>
    )
}
