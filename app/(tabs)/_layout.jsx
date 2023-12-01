import { Tabs } from 'expo-router'
import { ItemTabBar, MoneyChip } from '../../src/components'
import { colors, fonts, images } from '../../src/constants'

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
                                icon: images.homeIcon,
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
                                icon: images.storeIcon,
                                tintColor: '#3177ff'
                            }}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}
