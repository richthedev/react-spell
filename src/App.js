import React, { Component } from 'react';
import styled from 'styled-components';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import dictionary from './dictionary';
import { difficulty, settings } from './constants';
import Button from './Button';
import Choice from './Choice';
import Hint from './Hint';
import Score from './Score';
import Word from './Word';

const StyledApp = styled.div`
  text-align: center;
`;

const StyledSettings = styled.div`
  margin-top: 1rem;
`;

class App extends Component {
  state = {
    correctLetters: settings.ALREADY_GUESSED,
    difficulty: difficulty.HIDDEN,
    guessed: false,
    score: 0,
    word: dictionary.first(),
  };

  guessLetter = (key, e) => {
    const { word } = this.state;
    let { correctLetters, guessed, score } = this.state;
    const correct = key === word[correctLetters];

    // block input between words
    if (correctLetters === word.length) {
      return
    }

    if (correct) {
      correctLetters++;
      score++;
    } else {
      score = 0;
    }

    if (correctLetters === word.length) {
      guessed = true;
      setTimeout(this.nextWord, 1000);
    }

    this.setState({ correctLetters, guessed, score });
  }

  nextWord = () => {
    const word = dictionary.next();
    const correctLetters = settings.ALREADY_GUESSED;
    const guessed = false;

    this.setState({ correctLetters, guessed,  word });
  }

  render() {
    return (
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
          <Button
            onClick={this.nextWord}
            disabled={this.state.guessed}>suivant</Button>
          <StyledSettings>
            <Choice
              name="difficulty"
              checked={this.state.difficulty === difficulty.HIDDEN}
              onSelected={() => this.setState({ difficulty: difficulty.HIDDEN })}>cachées</Choice>
            <Choice
              name="difficulty"
              checked={this.state.difficulty === difficulty.MUTED}
              onSelected={() => this.setState({ difficulty: difficulty.MUTED })}>estompées</Choice>
          </StyledSettings>
        </KeyboardEventHandler>
      </StyledApp>
    );
  }
}

export default App;