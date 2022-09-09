import styled from "styled-components";

export const StyledLink = styled.a`
  &:hover, &:focus {
    text-decoration: underline;
  }

  &:focus {
    outline: solid 3px ${({theme}) => theme.colors.accent};
    border-radius: 3px;
  } 
`

export const StyledButton = styled.button`
  background-color: ${({theme}) => theme.colors.accent};
  color: ${({theme}) => theme.colors.neutral[50]};
  font-weight: bold;
  border: none;
  border-radius: 100px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  
  &:hover {
    background-color: black;
  }
  transition: all 0.5s;
`