import React from 'react';
import styled from 'styled-components';

const StyledHint = styled.img`
  max-height: 300px;
  margin: 0 auto;
  border-size: 0.4rem;
  border-style: solid;
  border-color: ${props => props.guessed ? '#44c844' : '#f9c80e'};
  border-radius: 2rem;
`;

const Hint = (props) => {
  return (
    <StyledHint src={`images/${props.word}.jpg`} guessed={props.guessed} />
  )
}

export default Hint;