import { Pressable } from 'react-native'
import { MoneyChip } from '../Cards/MoneyChip'
import useMoney from '../../hooks/useMoney'

export function MoneyChipButton() {
    const { money } = useMoney()

    return (
        <Pressable>
            <MoneyChip money={money} />
        </Pressable>
    )
}
