import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { movies } from '../../src/contants/emojis'

export default function Game() {
    const length = movies.length
    const [guess, setGuess] = useState({})
    const [userAnswer, setUserAnswer] = useState([])
    const [keyboard, setKeyboard] = useState([])
    const [originalKeyboard, setOriginalKeyboard] = useState([])
    const [answerPositions, setAnswerPositions] = useState([])

    useEffect(() => {
        getEmojis()
    }, [])

    const getRandomNumber = () => {
        return Math.floor(Math.random() * length)
    }

    const getEmojis = () => {
        const id = getRandomNumber()
        const movie = movies[id]
        setGuess(movie)
        getKeyboard(movie.title)
        setUserAnswer(
            Array(movie.title.length)
                .fill(false)
                .map((_, index) => movie.title[index] === ' ' && '-')
        )
    }

    const getKeyboard = (title) => {
        const letters = title
            .split('')
            .filter((letter) => letter !== ' ')
            .sort(() => Math.random() - 0.5)
        setKeyboard(letters)
        setOriginalKeyboard(letters)
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
        <SafeAreaView style={styles.container}>
            <View style={styles.viewTitle}>
                <Text style={styles.title}>Peliculas</Text>
            </View>
            <View style={styles.word}>
                {guess.emojis?.map((emoji, index) => (
                    <Text key={index} style={styles.emoji}>
                        {emoji}
                    </Text>
                ))}
            </View>
            <View style={styles.answerContainer}>
                <View style={styles.answer}>
                    {userAnswer.map((letter, index) => (
                        <Pressable
                            key={index}
                            onPress={() => removeLetterFromAnswer(index)}
                        >
                            <Text style={styles.letter}>
                                {letter[index] === ' ' ? '-' : letter}
                                {/* {letter} */}
                            </Text>
                        </Pressable>
                    ))}
                </View>
            </View>
            <View style={styles.keyboardContainer}>
                <View style={styles.keyboard}>
                    {keyboard.map((letter, index) => (
                        <Pressable
                            key={index}
                            onPress={() => addLetterToAnswer(letter, index)}
                        >
                            <Text style={styles.letter}>
                                {letter}
                            </Text>
                        </Pressable>
                    ))}
                </View>
            </View>
            <Pressable
                onPress={getEmojis}
                style={styles.nextButton}
            >
                <Text>Siguiente</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    viewTitle: {
        width: '90%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
    },
    word: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    emoji: {
        padding: 6,
        fontSize: 38,
        borderRadius: 10,
        marginHorizontal: 5,
        backgroundColor: '#eee',
    },
    letter: {
        width: 35,
        height: 35,
        margin: 5,
        padding: 6,
        fontSize: 16,
        borderRadius: 10,
        textAlign: 'center',
        backgroundColor: '#eee',
        textTransform: 'uppercase',
    },
    keyboardContainer: {
        flex: 1,
        width: '100%',
        paddingTop: 20,
        alignItems: 'center',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#4278ff',
    },
    keyboard: {
        width: '90%',
        marginTop: 20,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    answerContainer: {
        width: '100%',
        paddingVertical: 29,
        alignItems: 'center',
    },
    answer: {
        width: '90%',
        marginTop: 20,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    nextButton: {
        position: 'absolute',
        bottom: 20,
        width: '90%',
        padding: 16,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
    },
})
