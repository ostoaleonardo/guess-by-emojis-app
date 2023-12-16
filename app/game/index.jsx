import { useEffect, useState } from 'react'
import { useGlobalSearchParams, useRouter } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import Animated, { BounceIn, BounceOut } from 'react-native-reanimated'
import { BannerAdMobContainer, EmojiCard, LetterAnswer, LetterKey, PowerUp, Alert, WinModal, BuyModal } from '../../src/components'
import { colors, powers } from '../../src/constants'
import { getMode } from '../../src/utils/getMode'
import useLevels from '../../src/hooks/useLevels'
import useMoney from '../../src/hooks/useMoney'

export default function Game() {
    const router = useRouter()
    const params = useGlobalSearchParams()
    const { getLevel, unlockLevel } = useLevels()
    const { addMoney } = useMoney()
    const levelId = params.id
    const mode = getMode(params.mode).levels
    const [level, setLevel] = useState({})
    const [userAnswer, setUserAnswer] = useState([])
    const [keyboard, setKeyboard] = useState([])
    const [answerPositions, setAnswerPositions] = useState([])
    const [isRevealed, setIsRevealed] = useState(false)
    const [youWin, setYouWin] = useState(false)
    const [isNewUnlocked, setIsNewUnlocked] = useState(false)
    const [showAlert, setShowAlert] = useState('')
    const [powerUp, setPowerUp] = useState(null)
    const [showBuyModal, setShowBuyModal] = useState(false)

    useEffect(() => {
        const title = getMode(params.mode).title
        router.setParams({ title })
        getEmojis()
    }, [])

    const getEmojis = () => {
        const level = mode[levelId - 1]
        setLevel(level)
        getKeyboard(level.title)
        setUserAnswer(level.title.split('').map((letter) => letter === ' ' ? ' ' : false))
    }

    const getKeyboard = (title) => {
        const letters = title
            .toLowerCase()
            .split('')
            .filter((letter) => letter !== ' ')
            .sort(() => Math.random() - 0.5)
        setKeyboard(letters)
    }

    const addLetterToAnswer = (letter, index) => {
        // If the letter is a space, return
        if (letter === ' ') { return }

        let indexAnswer = -1
        let newAnswer = [...userAnswer]
        let newKeyboard = [...keyboard]

        if (!isRevealed) {
            // Get the first empty index
            const emptyIndex = newAnswer.indexOf(false)

            // Set the letter in the empty index
            newAnswer[emptyIndex] = letter
            indexAnswer = emptyIndex
        }

        if (isRevealed) {
            // Remove the letter of the index if it is not empty
            const correctIndex = revealLetter(letter)

            if (newAnswer[correctIndex] !== false) {
                const { newAnswer: updatedAnswer, newKeyboard: updatedKeyboard } = removeLetterFromAnswer(correctIndex)
                newAnswer = updatedAnswer
                newKeyboard = updatedKeyboard
            }

            newAnswer[correctIndex] = letter
            indexAnswer = correctIndex
        }

        // Set the new answer
        setUserAnswer(newAnswer)

        // Get a new keyboard without the letter
        newKeyboard[index] = false
        setKeyboard(newKeyboard)

        // Save the letter (original and new position)
        const newAnswerPositions = [...answerPositions]
        newAnswerPositions[indexAnswer] = { original: index, new: indexAnswer }
        setAnswerPositions(newAnswerPositions)
        checkAnswer(newAnswer)

        setIsRevealed(false)
        setShowAlert('')
    }

    const removeLetterFromAnswer = (index) => {
        // If the letter is a space, return
        if (userAnswer[index] === ' ') { return }

        // Get the original position of the letter
        const originalPosition = answerPositions[index].original

        // Get the letter to return
        const letterToReturn = userAnswer[index]

        // Get a new answer without the letter
        const newAnswer = [...userAnswer]
        newAnswer[index] = false
        setUserAnswer(newAnswer)

        // Get a new keyboard with the letter
        const newKeyboard = [...keyboard]
        newKeyboard[originalPosition] = letterToReturn
        setKeyboard(newKeyboard)

        return { newAnswer, newKeyboard }
    }

    const checkAnswer = async (answer) => {
        // Check if all spaces are filled
        const isAnswerComplete = answer.every((letter) => letter !== false)

        if (isAnswerComplete) {
            // Join answer reclacing '-' with spaces
            const answerWithoutSpaces = answer.join('')
            const titleLowerCase = level.title.toLowerCase()

            if (answerWithoutSpaces === titleLowerCase) {
                // If the next level is not unlocked
                const nextLevel = await getNextLevel()

                if (!nextLevel) {
                    addMoney(5)
                    unlockNextLevel()
                    setIsNewUnlocked(true)
                }

                setYouWin(true)
            }
        }
    }

    const getNextLevel = async () => {
        const nextId = parseInt(levelId) + 1
        const level = await getLevel(nextId, params.mode)
        return level
    }

    const unlockNextLevel = async () => {
        const nextId = parseInt(levelId) + 1
        await unlockLevel(nextId, params.mode)
    }

    const toogleBuyModal = (powerUp) => {
        setPowerUp(powerUp)
        setShowBuyModal(true)
    }

    const toggleCloseModal = (isBought) => {
        setShowBuyModal(false)

        if (isBought) {
            togglePowerUps(powerUp.id)
        }
    }

    const togglePowerUps = (id) => {
        switch (id) {
            case 1:
                toggleRevealLetter()
                break
            case 2:
                removeLetters()
                break
            case 3:
                revealAnswer()
                break
            default:
                break
        }
    }

    const toggleRevealLetter = () => {
        if (isRevealed) { return }

        setIsRevealed(true)
        // spendPowerUps(1, 1)
        setShowAlert('Selecciona la letra que quieras revelar')
    }

    const revealLetter = (letter) => {
        // When is pressed, the user can select a letter to reveal
        const answer = level.title.toLowerCase().split('')

        // Get the first index of the letter
        const availableIndex = answer.findIndex((letterAnswer, index) => {
            if (letterAnswer === letter && userAnswer[index] !== letterAnswer) {
                return true
            }

            return false
        })

        if (availableIndex !== -1) {
            return availableIndex
        }
    }

    const removeLetters = () => {
        // Remove of the answer the letters that are not in the correct position
        const answer = level.title.toLowerCase().split('')

        const newAnswer = [...userAnswer]

        // If there are no letters to remove, return
        if (newAnswer.every((letter, index) => letter === false || letter === answer[index])) {
            setShowAlert('No hay letras que eliminar')
            timeAlert()
            return
        }

        const newKeyboard = [...keyboard]
        const newAnswerPositions = [...answerPositions]

        newAnswer.forEach((letter, index) => {
            if (letter !== answer[index]) {
                const originalPosition = answerPositions[index]?.original
                newKeyboard[originalPosition] = letter
                newAnswer[index] = false
            }
        })

        // spendPowerUps(2, 1)
        setUserAnswer(newAnswer)
        setKeyboard(newKeyboard)
        setAnswerPositions(newAnswerPositions)
    }

    const revealAnswer = () => {
        // Get the answer without spaces
        const answer = level.title.toLowerCase().split('')
        setUserAnswer(answer)

        checkAnswer(answer)
        // spendPowerUps(3, 1)

        // Set the keyboard to empty spaces
        const newKeyboard = keyboard.fill(false)
        setKeyboard(newKeyboard)
    }

    const timeAlert = () => {
        setTimeout(() => {
            setShowAlert('')
        }, 3000)
    }

    return (
        <BannerAdMobContainer>
            <View style={styles.topContainer}>
                <Animated.View
                    style={styles.topContent}
                    entering={BounceIn} exiting={BounceOut}
                >
                    <View style={styles.emojisContainer}>
                        {level.emojis?.map((emoji, index) => (
                            <EmojiCard key={index} emoji={emoji} />
                        ))}
                    </View>
                    <View style={styles.answerContainer}>
                        {userAnswer.map((letter, index) => (
                            <LetterAnswer
                                key={index}
                                onPress={() => removeLetterFromAnswer(index)}
                                letter={letter[index] === ' ' ? '-' : letter}
                            />
                        ))}
                    </View>
                </Animated.View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.powerUpsContainer}>
                    {powers.map((item, index) => (
                        <PowerUp
                            key={index}
                            item={item}
                            onPress={() => toogleBuyModal(item)}
                        />
                    ))}
                </View>
                <View style={styles.keyboardContainer}>
                    {keyboard.map((letter, index) => (
                        <LetterKey
                            key={index}
                            onPress={() => addLetterToAnswer(letter, index)}
                            letter={letter}
                        />
                    ))}
                </View>
            </View>
            {showAlert !== '' && <Alert label={showAlert} />}
            <BuyModal powerUp={powerUp} isVisible={showBuyModal} onClose={toggleCloseModal} />
            <WinModal level={level} mode={params.mode} isNewUnlocked={isNewUnlocked} isVisible={youWin} />
        </BannerAdMobContainer>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        maxWidth: 450,
    },
    topContent: {
        flex: 1,
        gap: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emojisContainer: {
        gap: 10,
        padding: 16,
        borderWidth: 1,
        borderRadius: 28,
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderColor: colors.lightGray,
        backgroundColor: colors.white,
    },
    answerContainer: {
        gap: 4,
        width: '90%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    powerUpsContainer: {
        width: '90%',
        maxWidth: 350,
        gap: 16,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainer: {
        width: '100%',
        flex: 1,
        gap: 16,
        alignItems: 'center',
    },
    keyboardContainer: {
        width: '90%',
        maxWidth: 450,
        gap: 4,
        paddingTop: 16,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
