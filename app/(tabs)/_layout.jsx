import { Tabs } from 'expo-router'
import { MoneyChip } from '../../src/components/MoneyChip'
import { ItemTabBar } from '../../src/components/ItemTabBar'
import { colors, fonts } from '../../src/contants/theme'

const homeIcon = require('../../assets/icons/home.png')
const storeIcon = require('../../assets/icons/store.png')

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShadowVisible: false,

                headerStyle: {
                    backgroundColor: colors.backgroundHeader,
                },

                headerTitleStyle: {
                    fontSize: 24,
                    fontFamily: fonts.bold,
                },

                headerTintColor: 'white',
                headerTitleAlign: 'center',

                headerRight: () => (
                    <MoneyChip />
                ),

                tabBarStyle: {
                    height: 70,
                    elevation: 0,
                    borderTopWidth: 0,
                    backgroundColor: '#18161f',
                },

                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen
                name='home'
                options={{
                    title: 'Inicio',
                    tabBarIcon: () => (
                        <ItemTabBar
                            item={{
                                path: '/home',
                                icon: homeIcon,
                                tintColor: '#3177ff'
                            }}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name='store'
                options={{
                    title: 'Tienda',
                    tabBarIcon: () => (
                        <ItemTabBar
                            item={{
                                path: '/store',
                                icon: storeIcon,
                                tintColor: '#3177ff'
                            }}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}
