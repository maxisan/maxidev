import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  border: solid black 1px;
  padding: 1rem 0;
  gap: .5rem;
  background-color: ${({theme}) => theme.colors.neutral[50]};
`

export const ImageWrapper = styled.div`
  
`

export const ContentWrapper = styled.div`
  padding: 0 1rem;
  
`