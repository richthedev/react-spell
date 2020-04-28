import React from 'react'
import HiddenLetter from './HiddenLetter'
import MutedLetter from './MutedLetter'
import styled from 'styled-components'
import { difficulties } from './constants'

const StyledWord = styled.div`
  font-size: 5rem;
  letter-spacing: 0.7rem;
  text-transform: uppercase;
  margin: 1rem;
  color: ${({ guessed, theme }) => guessed ? theme.success : theme.main};
`

const Word = ({ word, guessed, correctLetters, difficulty }) => {
  const letters = word.split('')
  const LetterComponent = difficulty === difficulties.HIDDEN
    ? HiddenLetter
    : MutedLetter

  return (
    <StyledWord guessed={guessed}>
      {letters.map((letter, index) => (
        <LetterComponent
          key={`${letter}-${index}`}
          letter={letter}
          guessed={index < correctLetters}/>
      ))}
    </StyledWord>
  )
}

export default Word
