import { useState } from 'react'
import { Image, Pressable, StyleSheet } from 'react-native'
import { MoneyChip } from '../Cards/MoneyChip'
import { colors, images } from '../../constants'
import { View } from 'react-native'
import { WatchAdModal } from '../Modals/WatchAdModal'
import useMoney from '../../hooks/useMoney'

export function MoneyChipButton() {
    const { money } = useMoney()
    const [showModal, setShowModal] = useState(false)

    const toggleShowModal = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            <Pressable onPress={toggleShowModal} style={styles.container}>
                <MoneyChip money={money} />
                <View style={styles.plusContainer}>
                    <Image source={images.closeIcon} style={styles.plusIcon} />
                </View>
            </Pressable>
            <WatchAdModal isVisible={showModal} onClose={toggleShowModal} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusContainer: {
        position: 'absolute',
        right: -8,
        padding: 4,
        borderRadius: 50,
        backgroundColor: colors.closeButton,
    },
    plusIcon: {
        width: 8,
        height: 8,
        transform: [{ rotate: '45deg' }],
    },
})
