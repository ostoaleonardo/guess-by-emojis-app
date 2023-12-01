import { useEffect, useState } from 'react'
import { useGlobalSearchParams, useRouter } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import { BannerAdMobContainer, EmojiText, LetterAnswer, LetterKey, PowerUp, Alert, WinModal } from '../../src/components'
import { movies, series, characters, videogames, brands, countries, powers, colors } from '../../src/constants'
import Animated, { BounceIn, BounceOut } from 'react-native-reanimated'
import useLevels from '../../src/hooks/useLevels'
import usePowerUps from '../../src/hooks/usePowerUps'
import useMoney from '../../src/hooks/useMoney'

export default function Game() {
    const router = useRouter()
    const params = useGlobalSearchParams()
    const { getLevel, unlockLevel } = useLevels()
    const { addMoney } = useMoney()
    const { powerUps, spendPowerUps } = usePowerUps()
    const lvl = params.id
    const mode = params.mode === 'movies' ? movies
        : params.mode === 'series' ? series
            : params.mode === 'characters' ? characters
                : params.mode === 'videogames' ? videogames
                    : params.mode === 'brands' ? brands
                        : params.mode === 'countries' && countries
    const title = params.mode === 'movies' ? 'Películas'
        : params.mode === 'series' ? 'Series'
            : params.mode === 'characters' ? 'Personajes'
                : params.mode === 'videogames' ? 'Videojuegos'
                    : params.mode === 'brands' ? 'Marcas'
                        : params.mode === 'countries' && 'Países'
    const [guess, setGuess] = useState({})
    const [userAnswer, setUserAnswer] = useState([])
    const [keyboard, setKeyboard] = useState([])
    const [answerPositions, setAnswerPositions] = useState([])
    const [isRevealed, setIsRevealed] = useState(false)
    const [youWin, setYouWin] = useState(false)
    const [isNewUnlocked, setIsNewUnlocked] = useState(false)
    const [showAlert, setShowAlert] = useState('')

    useEffect(() => {
        router.setParams({ name: title })
        getEmojis()
    }, [])

    const getEmojis = () => {
        const level = mode[lvl - 1]
        setGuess(level)
        getKeyboard(level.title)
        setUserAnswer(
            Array(level.title.length)
                .fill(false)
                .map((_, index) => level.title[index] === ' ' && '-')
        )
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
        if (letter === '-') { return }

        let indexAnswer = -1
        let newAnswer = [...userAnswer]
        let newKeyboard = [...keyboard]

        if (!isRevealed) {
            // Get the first empty index
            var emptyIndex = newAnswer.indexOf(false)
            if (newAnswer[emptyIndex] === '-') { emptyIndex += 1 }

            // Set the letter in the empty index
            newAnswer[emptyIndex] = letter
            indexAnswer = emptyIndex
        }

        if (isRevealed) {
            // Remove the letter of the index if it is not empty
            const correctIndex = revealLetter(letter)

            if (newAnswer[correctIndex] !== false) {
                newAnswer = removeLetterFromAnswer(correctIndex).newAnswer
                newKeyboard = removeLetterFromAnswer(correctIndex).newKeyboard
            }

            newAnswer[correctIndex] = letter
            indexAnswer = correctIndex
            setIsRevealed(false)
        }

        // Set the new answer
        setUserAnswer(newAnswer)

        // Get a new keyboard without the letter
        newKeyboard[index] = '-'
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
        if (userAnswer[index] === '-') { return }

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
        if (!isAnswerComplete) { return }

        // Join answer reclacing '-' with spaces
        const answerWithoutSpaces = answer.join('').replace(/-/g, ' ')
        const titleLowerCase = guess.title.toLowerCase()

        if (answerWithoutSpaces === titleLowerCase) {
            // If the next level is not unlocked
            const nextLevel = await getNextLevel()
            if (nextLevel === undefined) {
                addMoney(5)
                unlockNextLevel()
                setIsNewUnlocked(true)
            }

            setYouWin(true)
        }
    }

    const getNextLevel = async () => {
        const nextId = parseInt(lvl) + 1
        const level = await getLevel(nextId, params.mode)
        return level
    }

    const unlockNextLevel = async () => {
        const nextId = parseInt(lvl) + 1
        await unlockLevel(nextId, params.mode)
    }

    const enoughPowerUps = (id) => {
        if (powerUps[id].count < 1) {
            setShowAlert('No tienes este power up, puedes comprarlo en la tienda')
            timeAlert()
            return
        }

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
        spendPowerUps(1, 1)
        setShowAlert('Selecciona la letra que quieras revelar')
    }

    const revealLetter = (letter) => {
        // When is pressed, the user can select a letter to reveal
        const answerLowerCase = guess.title.toLowerCase().split('')
        const answerWithoutSpaces = answerLowerCase.map((letter) => letter === ' ' ? '-' : letter)

        // Get the first index of the letter
        const availableIndex = answerWithoutSpaces.findIndex((letterAnswer, index) => {
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
        const answer = guess.title.toLowerCase().split('')
        const answerWithoutSpaces = answer.map((letter) => letter === ' ' ? '-' : letter)

        const newAnswer = [...userAnswer]

        // If there are no letters to remove, return
        if (newAnswer.every((letter, index) => letter === false || letter.toLowerCase() === answerWithoutSpaces[index])) {
            setShowAlert('No hay letras que eliminar')
            timeAlert()
            return
        }

        const newKeyboard = [...keyboard]
        const newAnswerPositions = [...answerPositions]

        newAnswer.forEach((letter, index) => {
            if (letter !== answerWithoutSpaces[index]) {
                const originalPosition = answerPositions[index]?.original
                newKeyboard[originalPosition] = letter
                newAnswer[index] = false
            }
        })

        spendPowerUps(2, 1)
        setUserAnswer(newAnswer)
        setKeyboard(newKeyboard)
        setAnswerPositions(newAnswerPositions)
    }

    const revealAnswer = () => {
        // Get the answer without spaces
        const answer = guess.title.toLowerCase().split('')
        const answerWithoutSpaces = answer.map((letter) => letter === ' ' ? '-' : letter)
        setUserAnswer(answerWithoutSpaces)

        // Set the keyboard to empty with '-'
        const newKeyboard = keyboard.fill('-')
        setKeyboard(newKeyboard)

        spendPowerUps(3, 1)
        checkAnswer(answerWithoutSpaces)
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
                        {guess.emojis?.map((emoji, index) => (
                            <EmojiText key={index} emoji={emoji} />
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
                            count={powerUps[item.id]?.count ?? 0}
                            onPress={() => enoughPowerUps(item.id)}
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
            {youWin && <WinModal level={guess} mode={params.mode} isNewUnlocked={isNewUnlocked} />}
        </BannerAdMobContainer>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        position: 'relative',
        flex: 1,
        alignItems: 'center',
    },
    topContent: {
        position: 'absolute',
        zIndex: 3,
        gap: 24,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emojisContainer: {
        gap: 10,
        width: '100%',
        paddingTop: 24,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    answerContainer: {
        gap: 4,
        width: '90%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    bottomContainer: {
        position: 'relative',
        width: '100%',
        flex: 1,
        gap: 16,
        alignItems: 'center',
        backgroundColor: colors.backgroundHeader,
    },
    powerUpsContainer: {
        gap: 8,
        width: '90%',
        marginTop: 20,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    keyboardContainer: {
        gap: 4,
        width: '90%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
