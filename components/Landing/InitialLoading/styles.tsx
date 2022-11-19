import styled from 'styled-components';
import viewports from 'styles/utils';

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TextContainer = styled.div`
  color: ${({theme}) => theme.colors.neutral[50]};
  font-family: 'Signika Negative', sans-serif;
  font-size: 5rem;
  line-height: 1;
  width: 0px;
  margin: 0 0.1rem;
  overflow: hidden;

  ${viewports.tabletL} {
    font-size: 10rem;
  }
`

export const SymbolContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  ${viewports.tabletL} {
    width: 4rem;
  }
`