import React from 'react';
import styled from 'styled-components';

const StyledLetter = styled.span`
  ${props => props.guessed ? '' : 'color: #763eab;'}
`;

const Letter = (props) => {
  return (
    <StyledLetter {...props}>{props.guessed ? props.letter : '_'}</StyledLetter>
  )
}

export default Letter;