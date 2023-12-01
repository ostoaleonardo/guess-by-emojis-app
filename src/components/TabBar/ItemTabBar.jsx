import { usePathname } from 'expo-router'
import { Image, StyleSheet, View } from 'react-native'
import { colors } from '../../constants'

export function ItemTabBar({ item }) {
    const pathname = usePathname()

    return (
        <View style={styles.container}>
            {pathname === item.path ? (
                <View style={styles.activeContainer}>
                    <View style={styles.iconActiveContainer}>
                        <Image
                            source={item.icon}
                            style={styles.icon}
                        />
                    </View>
                </View>
            ) : (
                <View style={styles.inactiveContainer}>
                    <View style={styles.iconInactiveContainer}>
                        <View style={styles.reflection} />
                        <Image
                            source={item.icon}
                            style={styles.icon}
                        />
                    </View>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inactiveContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shadowCard,
    },
    activeContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: colors.backgroundShadow,
    },
    iconInactiveContainer: {
        position: 'absolute',
        top: 0,
        zIndex: 2,
        width: '100%',
        height: '90%',
        borderRadius: 16,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundShadow,
    },
    iconActiveContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '90%',
        borderRadius: 16,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shadowCard,
    },
    reflection: {
        position: 'absolute',
        zIndex: 1,
        width: 25,
        height: '150%',
        opacity: 0.1,
        backgroundColor: colors.backgroundContainer,
        transform: [{ rotate: '35deg' }],
    },
    icon: {
        width: 32,
        height: 32,
        tintColor: colors.letter,
    },
})
