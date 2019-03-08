import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import dictionary from './dictionary'
import { difficulty, settings, theme } from './constants'
import Button from './Button'
import Hint from './Hint'
import Score from './Score'
import Word from './Word'

const StyledApp = styled.div`
  text-align: center;
`

const StyledSettings = styled.div`
  margin-top: 2rem;

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

  guessLetter = (key, e) => {
    const { word } = this.state;
    let { correctLetters, guessed, score } = this.state;
    const correct = key === word[correctLetters];

    // block input between words
    if (correctLetters === word.length) {
      return
    }

    if (correct) {
      correctLetters++
      score++
    } else {
      score = 0
    }

    if (correctLetters === word.length) {
      guessed = true
      setTimeout(this.nextWord, 1000)
    }

    this.setState({ correctLetters, guessed, score })
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
              <Button onClick={() => this.setState({ difficulty: difficulty.HIDDEN })}>cachées</Button>
              <Button onClick={() => this.setState({ difficulty: difficulty.MUTED })}>estompées</Button>
              <Button onClick={this.nextWord} disabled={this.state.guessed}>suivant</Button>
            </StyledSettings>
          </KeyboardEventHandler>
        </StyledApp>
      </ThemeProvider>
    )
  }
}

export default App
