import React from 'react'
import styled from 'styled-components'

const StyledHint = styled.img`
  max-height: 300px;
  margin: 0 auto;
  border-width: ${props => props.theme.borderWidth}px;
  border-style: solid;
  border-color: ${props => props.guessed ? props.theme.success : props.theme.primary};
  border-radius: 2rem;
`;

const Hint = (props) => {
  return (
    <StyledHint src={`images/${props.word}.jpg`} guessed={props.guessed} />
  )
}

export default Hint
