import { useEffect } from 'react'
import { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated'

export default function useBounceAnimation(valueToAnimate) {
    const animatedValue = useSharedValue(1)

    useEffect(() => {
        if (!valueToAnimate) return

        animatedValue.value = 0
        animatedValue.value = withSpring(1)

        return () => {
            animatedValue.value = 0
        }
    }, [valueToAnimate])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: animatedValue.value }],
        }
    })

    return animatedStyle
}
