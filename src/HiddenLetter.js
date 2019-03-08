import React from 'react'
import styled from 'styled-components'

const StyledLetter = styled.span`
  ${props => props.guessed ? '' : `color: ${props.theme.bgLight};`}
`;

const Letter = (props) => {
  return (
    <StyledLetter {...props}>{props.guessed ? props.letter : '-'}</StyledLetter>
  )
}

export default Letter
