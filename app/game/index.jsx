import { useEffect, useState } from 'react'
import { useGlobalSearchParams, useRouter } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { movies, series, characters, videogames, brands, countries } from '../../src/contants/emojis'
import { LetterKey } from '../../src/components/LetterKey'
import { LetterAnswer } from '../../src/components/LetterAnswer'
import { EmojiText } from '../../src/components/EmojiText'

export default function Game() {
    const router = useRouter()
    const params = useGlobalSearchParams()
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
        }
    }

    const removeLetterFromAnswer = (index) => {
        // If the letter is a space, return
        if (userAnswer[index] === '-') {
            return
        }

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

    const checkAnswer = () => {
        // Check if all spaces are filled
        const isAnswerComplete = userAnswer.every((letter) => letter !== false)

        if (userAnswer.join('') === guess.title) {
            console.log('Ganaste')
        }
    }

    return (
        <View style={styles.container}>
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
            <View style={styles.keyboardContainer}>
                <View style={styles.keyboard}>
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
        backgroundColor: 'white',
    },
    emojisContainer: {
        gap: 10,
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    answerContainer: {
        flex: 1,
        width: '100%',
        paddingVertical: 29,
        alignItems: 'center',
    },
    answer: {
        gap: 10,
        width: '90%',
        marginTop: 20,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    keyboardContainer: {
        flex: 2,
        width: '100%',
        paddingTop: 20,
        alignItems: 'center',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#4278ff',
    },
    keyboard: {
        gap: 10,
        width: '90%',
        marginTop: 20,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
})
