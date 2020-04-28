import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.bg};
  border: ${({ theme }) => theme.borderWidth}px solid ${({ disabled, theme }) => disabled ? theme.success : theme.main};
  border-radius: 0.5rem;
  color: ${({ disabled, theme }) => disabled ? theme.success : theme.main};
  cursor: pointer;
  font-size: 1rem;
  padding: 0.6rem;

  :focus {
    outline: none;
  }

  :hover {
    color: ${({ theme }) => theme.alt};
    border-color: ${({ theme }) => theme.alt};
  }
`;

const Button = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  )
}

export default Button
