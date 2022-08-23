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

export const StyledButton = styled.button<{variant:string}>`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
`