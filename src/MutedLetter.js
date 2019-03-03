import React from 'react';
import styled from 'styled-components';

const StyledLetter = styled.span`
  ${props => props.guessed ? '' : 'color: #763eab;'}
`;

const Letter = (props) => {
  return (
    <StyledLetter {...props}>{props.letter}</StyledLetter>
  )
}

export default Letter;