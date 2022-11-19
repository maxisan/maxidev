import styled from 'styled-components';
import viewports from 'styles/utils';

export const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: fixed;
  grid-template-rows: auto 1fr;
  gap: 3rem;
  overflow: hidden;

  ${viewports.tablet} {
    grid-template-rows: 100%;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

`;

export const ScrollIconContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: ${({theme}) => theme.colors.neutral[50]};
  padding: 1rem 0;
  gap: 0.5rem;
`
