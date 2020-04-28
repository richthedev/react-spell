import React, { useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import dictionary from './dictionary'
import { difficulties, settings, theme } from './constants'
import Button from './Button'
import Hint from './Hint'
import Score from './Score'
import Word from './Word'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bg};
    box-sizing: border-box;
    color: ${props => props.theme.main};
    margin: 0;
    padding: 0;
  }
`

const StyledApp = styled.div`
  text-align: center;
`

const StyledSettings = styled.div`
  button:not(:last-child) {
    margin-right: 1rem;
  }
`

const App = () => {
  const [correctLetters, setCorrectLetters] = useState(settings.ALREADY_GUESSED)
  const [difficulty, setDifficulty] = useState(difficulties.HIDDEN)
  const [guessed, setGuessed] = useState(false)
  const [score, setScore] = useState(0)
  const [word, setWord] = useState(dictionary.current())

  const cheat = () => {
    setScore(score - 1)
    nextLetter()
  }

  const guessLetter = (letter) => {
    const correct = letter === word[correctLetters]

    // block input between words
    if (guessed) {
      return
    }

    if (correct) {
      nextLetter()
      setScore(score + 1)
    } else {
      setScore(0)
    }
  }

  const nextLetter = () => {
    setCorrectLetters(correctLetters + 1)

    if (correctLetters === word.length - 1) {
      setGuessed(true)
      setTimeout(() => nextWord(), settings.TIME_BETWEEN_WORDS)
    }
  }

  const nextWord = () => {
    setWord(dictionary.next())
    setCorrectLetters(settings.ALREADY_GUESSED)
    setGuessed(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <GlobalStyle />
        <KeyboardEventHandler
          handleKeys={['alphabetic']}
          onKeyEvent={letter => guessLetter(letter)} />
        <Score score={score} />
        <Hint
          word={word}
          guessed={guessed} />
        <Word
          word={word}
          difficulty={difficulty}
          guessed={guessed}
          correctLetters={correctLetters} />
        <KeyboardEventHandler
          handleKeys={['alphabetic']}
          onKeyEvent={letter => guessLetter(letter)}>
          <StyledSettings>
            <Button
              onClick={() => setDifficulty(difficulties.HIDDEN)}>cachées</Button>
            <Button
              onClick={() => setDifficulty(difficulties.MUTED)}>estompées</Button>
            <Button
              onClick={() => cheat()}
              disabled={guessed}>indice</Button>
            <Button
              onClick={() => nextWord()}
              disabled={guessed}>suivant</Button>
          </StyledSettings>
        </KeyboardEventHandler>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
