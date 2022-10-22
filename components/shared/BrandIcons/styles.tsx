import styled from "styled-components";

export const IconWrapper = styled.div<{ size?: number; color?: string;}>`
  font-size: ${({size}) => size || 1.5}rem;
  color: ${({theme, color}) => color || theme.colors.font};
`