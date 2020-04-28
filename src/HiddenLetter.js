import React from 'react'
import styled from 'styled-components'

const StyledLetter = styled.span`
  ${({ guessed, theme }) => guessed ? '' : `color: ${theme.bgLight};`}
`;

const Letter = ({ letter, guessed }) => {
  return (
    <StyledLetter guessed={guessed}>{guessed ? letter : '-'}</StyledLetter>
  )
}

export default Letter
