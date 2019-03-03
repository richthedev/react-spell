import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: ${props => props.disabled ? '#44c844' : '#f9c80e'};
  color: ${props => props.disabled ? '#00aa00' : '#662e9b'};
  padding: 1rem;
  cursor: pointer;

  :hover {
    background-color: #dd7500;
  }
`;

const Button = (props) => {
  return (
    <StyledButton {...props}>{props.children}</StyledButton>
  )
}

export default Button;