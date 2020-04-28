import React from 'react'
import styled from 'styled-components'

const StyledHint = styled.img`
  max-height: 400px;
  margin: 0 auto;
  border-width: ${({ theme }) => theme.borderWidth}px;
  border-style: solid;
  border-color: ${({ guessed, theme }) => guessed ? theme.success : theme.main};
  border-radius: 2rem;
`;

const Hint = ({ word, guessed }) => {
  return (
    <StyledHint src={`images/${word}.jpg`} guessed={guessed} />
  )
}

export default Hint
