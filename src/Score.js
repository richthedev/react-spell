import React from 'react';
import styled from 'styled-components';

const StyledScore = styled.h3`
`;

const Score = (props) => {
  return (
    <StyledScore>SCORE: {props.score}</StyledScore>
  )
}

export default Score;