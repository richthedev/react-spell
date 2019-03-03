import React from 'react';
import HiddenLetter from './HiddenLetter';
import MutedLetter from './MutedLetter';
import styled from 'styled-components';
import { difficulty } from './constants';

const StyledWord = styled.div`
  font-size: 5rem;
  letter-spacing: 0.7rem;
  text-transform: uppercase;
  margin: 1rem;
  color: ${props => props.guessed ? '#44c844' : '#f9c80e'};
`;

const Word = (props) => {
  const letters = props.word.split('');
  const Letter = props.difficulty === difficulty.HIDDEN
    ? HiddenLetter
    : MutedLetter;

  return (
    <StyledWord guessed={props.guessed}>
      {letters.map((letter, index) => (
        <Letter
          key={`${letter}-${index}`}
          letter={letter}
          guessed={index < props.correctLetters}/>
      ))}
    </StyledWord>
  )
}

export default Word;