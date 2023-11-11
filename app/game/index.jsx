import { useEffect, useState } from 'react'
import { useGlobalSearchParams, useRouter } from 'expo-router'
import { Image, StyleSheet, Text, View } from 'react-native'
import { LetterKey } from '../../src/components/LetterKey'
import { LetterAnswer } from '../../src/components/LetterAnswer'
import { EmojiText } from '../../src/components/EmojiText'
import { PowerUp } from '../../src/components/PowerUp'
import { movies, series, characters, videogames, brands, countries } from '../../src/contants/emojis'
import { items } from '../../src/contants/ui'
import useLockLevels from '../../src/hooks/useLockLevels'
import { WinModal } from '../../src/components/WinModal'

const image = require('../../assets/images/header.png')

export default function Game() {
    const router = useRouter()
    const params = useGlobalSearchParams()
    const { unlockLevel, getLockedLevels } = useLockLevels()
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
    const [youWin, setYouWin] = useState(false)

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

        const newAnswer = [...userAnswer]
        // Get the first empty index
        const emptyIndex = newAnswer.indexOf(false)

        if (newAnswer[emptyIndex] === '-') {
            emptyIndex += 1
        }

        // If there is an empty index
        if (newAnswer[emptyIndex] === false) {
            // Set the letter in the empty index
            newAnswer[emptyIndex] = letter

            // Get a new keyboard without the letter
            const newKeyboard = [...keyboard]
            newKeyboard[index] = '-'

            setUserAnswer(newAnswer)
            setKeyboard(newKeyboard)

            // Save the letter (original and new position)
            const newAnswerPositions = [...answerPositions]
            newAnswerPositions[emptyIndex] = { original: index, new: emptyIndex }
            setAnswerPositions(newAnswerPositions)
            checkAnswer(newAnswer)
        }
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
        console.log(answerWithoutSpaces)
        // Set tile to lowercase
        const titleLowerCase = guess.title.toLowerCase()

        if (isAnswerComplete) {
            if (answerWithoutSpaces === titleLowerCase) {
                setYouWin(true)
                unlockNextLevel()
            }
        }
    }

    const unlockNextLevel = async () => {
        const nextId = parseInt(lvl) + 1
        await unlockLevel(nextId, params.mode)
    }

    return (
        <View style={styles.container}>
            {youWin && <WinModal mode={params.mode} />}
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
                        <PowerUp key={index} item={item} />
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
