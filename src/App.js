import React, { Component } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import dictionary from './dictionary'
import { difficulty, settings, theme } from './constants'
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

class App extends Component {
  state = {
    correctLetters: settings.ALREADY_GUESSED,
    difficulty: difficulty.HIDDEN,
    guessed: false,
    score: 0,
    word: dictionary.first(),
  }

  cheat = () => {
    let { score } = this.state

    score--
    this.nextLetter();

    this.setState({ score })
  }

  guessLetter = (letter) => {
    const { correctLetters, word } = this.state
    let { score } = this.state
    const correct = letter === word[correctLetters]

    // block input between words
    if (correctLetters === word.length) {
      return
    }

    if (correct) {
      this.nextLetter()
      score++
    } else {
      score = 0
    }

    this.setState({ score })
  }

  nextLetter = () => {
    const { word } = this.state
    let { correctLetters, guessed } = this.state

    correctLetters++

    if (correctLetters === word.length) {
      guessed = true
      setTimeout(this.nextWord, 1000)
    }

    this.setState({ correctLetters, guessed })
  }

  nextWord = () => {
    const word = dictionary.next()
    const correctLetters = settings.ALREADY_GUESSED
    const guessed = false

    this.setState({ correctLetters, guessed,  word })
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <GlobalStyle />
          <KeyboardEventHandler
            handleKeys={['alphabetic']}
            onKeyEvent={this.guessLetter} />
          <Score score={this.state.score} />
          <Hint
            word={this.state.word}
            guessed={this.state.guessed} />
          <Word
            word={this.state.word}
            difficulty={this.state.difficulty}
            guessed={this.state.guessed}
            correctLetters={this.state.correctLetters} />
          <KeyboardEventHandler
            handleKeys={['alphabetic']}
            onKeyEvent={this.guessLetter}>
            <StyledSettings>
              <Button
                onClick={() => this.setState({ difficulty: difficulty.HIDDEN })}>cachées</Button>
              <Button
                onClick={() => this.setState({ difficulty: difficulty.MUTED })}>estompées</Button>
              <Button
                onClick={this.cheat}
                disabled={this.state.guessed}>indice</Button>
              <Button
                onClick={this.nextWord}
                disabled={this.state.guessed}>suivant</Button>
            </StyledSettings>
          </KeyboardEventHandler>
        </StyledApp>
      </ThemeProvider>
    )
  }
}

export default App
