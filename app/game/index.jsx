import { useEffect, useState } from 'react'
import { useGlobalSearchParams, useRouter } from 'expo-router'
import { Image, StyleSheet, View } from 'react-native'
import { LetterKey } from '../../src/components/LetterKey'
import { LetterAnswer } from '../../src/components/LetterAnswer'
import { EmojiText } from '../../src/components/EmojiText'
import { PowerUp } from '../../src/components/PowerUp'
import { items } from '../../src/contants/ui'
import { movies, series, characters, videogames, brands, countries } from '../../src/contants/emojis'
import { WinModal } from '../../src/components/WinModal'
import useLockLevels from '../../src/hooks/useLockLevels'
import useMoney from '../../src/hooks/useMoney'
import usePowerUps from '../../src/hooks/usePowerUps'
import { Alert } from '../../src/components/Alert'

const image = require('../../assets/images/header.png')

export default function Game() {
    const router = useRouter()
    const params = useGlobalSearchParams()
    const { unlockLevel } = useLockLevels()
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
            .split('')
            .filter((letter) => letter !== ' ')
            .sort(() => Math.random() - 0.5)
        setKeyboard(letters)
    }

    const addLetterToAnswer = (letter, index) => {
        // If the letter is a space, return
        if (letter === '-') { return }

        let indexAnswer = -1
        const newAnswer = [...userAnswer]

        if (!isRevealed) {
            // Get the first empty index
            var emptyIndex = newAnswer.indexOf(false)
            if (newAnswer[emptyIndex] === '-') { emptyIndex += 1 }

            // Set the letter in the empty index
            newAnswer[emptyIndex] = letter
            setUserAnswer(newAnswer)
            indexAnswer = emptyIndex
        }

        if (isRevealed) {
            const correctIndex = revealLetter(letter)
            newAnswer[correctIndex] = letter
            setUserAnswer(newAnswer)
            setIsRevealed(false)
            indexAnswer = correctIndex
        }

        // Get a new keyboard without the letter
        const newKeyboard = [...keyboard]
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
    }

    const checkAnswer = (answer) => {
        // Check if all spaces are filled
        const isAnswerComplete = answer.every((letter) => letter !== false)
        // Join answer reclacing '-' with spaces
        const answerWithoutSpaces = answer.join('').replace(/-/g, ' ').toLowerCase()
        // Set tile to lowercase
        const titleLowerCase = guess.title.toLowerCase()

        if (isAnswerComplete) {
            if (answerWithoutSpaces === titleLowerCase) {
                addMoney(5)
                setYouWin(true)
                unlockNextLevel()
            }
        }
    }

    const unlockNextLevel = async () => {
        const nextId = parseInt(lvl) + 1
        await unlockLevel(nextId, params.mode)
    }

    const toggleRevealLetter = () => {
        setIsRevealed(true)
        spendPowerUps(1, 1)
        setShowAlert('Selecciona la letra que quieras revelar')
    }

    const revealLetter = (letter) => {
        // When is pressed, the user can select a letter to reveal
        const answerLowerCase = guess.title.toLowerCase().split('')
        const answerWithoutSpaces = answerLowerCase.map((letter) => letter === ' ' ? '-' : letter)

        const letterIndices = answerWithoutSpaces.reduce((indices, char, index) => {
            if (char === letter.toLowerCase()) { indices.push(index) }
            return indices
        }, [])

        // Get the first index that is not revealed
        const availableIndex = letterIndices.find((index) => !userAnswer[index])

        if (availableIndex !== undefined) {
            userAnswer[availableIndex] = true
            return availableIndex
        } else {
            return -1
        }

    }

    const deleteLetters = () => {
        // Remove of the answer the letters that are not in the correct position
        const answer = guess.title.split('')
        const answerWithoutSpaces = answer.map((letter) => letter === ' ' ? '-' : letter)

        const newAnswer = [...userAnswer]

        if (newAnswer.every((letter) => letter === false || letter === '-')) {
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
        const answer = guess.title.split('')
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
        <View style={styles.container}>
            {showAlert !== '' && <Alert label={showAlert} />}
            {youWin && <WinModal level={guess} mode={params.mode} />}
            <Image source={image} style={styles.imageHeader} />
            <View style={styles.topContainer}>
                <View style={styles.topShadow} />
                <View style={styles.topContent}>
                    <View style={styles.emojisContainer}>
                        {guess.emojis?.map((emoji, index) => (
                            <EmojiText key={index} emoji={emoji} />
                        ))}
                    </View>
                    <View style={styles.answerContainer}>
                        <View style={styles.answer}>
                            {userAnswer.map((letter, index) => (
                                <LetterAnswer
                                    key={index}
                                    onPress={() => removeLetterFromAnswer(index)}
                                    letter={letter[index] === ' ' ? '-' : letter}
                                />
                            ))}
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.powerUpsContainer}>
                    {items.map((item, index) => (
                        <PowerUp
                            key={index}
                            item={item}
                            count={powerUps[item.id] ? powerUps[item.id].count : 0}
                            onPress={
                                () => item.id === 1 ? toggleRevealLetter()
                                    : item.id === 2 ? deleteLetters()
                                        : item.id === 3 && revealAnswer()
                            }
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e9f0ff',
    },
    imageHeader: {
        width: '100%',
        height: 100,
        resizeMode: 'stretch',
    },
    topContainer: {
        position: 'relative',
        flex: 1,
        width: '90%',
        marginVertical: 16,
        alignItems: 'center',
    },
    topShadow: {
        width: '96%',
        height: '100%',
        borderRadius: 20,
        backgroundColor: '#e4e3f1',
    },
    topContent: {
        position: 'absolute',
        zIndex: 2,
        gap: 28,
        width: '100%',
        height: '97%',
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    emojisContainer: {
        gap: 10,
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    answerContainer: {
        width: '90%',
        alignItems: 'center',
    },
    answer: {
        gap: 4,
        width: '95%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    bottomContainer: {
        position: 'relative',
        width: '100%',
        flex: 1,
        gap: 8,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    keyboardContainer: {
        gap: 4,
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    powerUpsContainer: {
        gap: 8,
        width: '90%',
        marginTop: 16,
        marginBottom: 12,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
