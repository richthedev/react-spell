import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${props => props.theme.bg};
  border: ${props => props.theme.borderWidth}px solid ${props => props.disabled ? props.theme.success : props.theme.main};
  border-radius: 0.5rem;
  color: ${props => props.disabled ? props.theme.success : props.theme.main};
  cursor: pointer;
  font-size: 1rem;
  padding: 0.6rem;

  :focus {
    outline: none;
  }

  :hover {
    color: ${props => props.theme.alt};
    border-color: ${props => props.theme.alt};
  }
`;

const Button = (props) => {
  return (
    <StyledButton {...props}>{props.children}</StyledButton>
  )
}

export default Button
