import styled from 'styled-components';
import viewports from 'styles/utils';

export const MainWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 1rem;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: row;
  align-items: center;
  height: 100px;
  z-index: 10;
  ${viewports.tablet} {
    padding: 0 2rem;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const CtaWrapper = styled.div`
  grid-column: 3;
  justify-self: end;
`

export const LogoWrapper = styled.div`
  padding-right: 1rem;
  border-right: solid 2px ${({ theme }) => theme.colors.neutral[500]};
  margin-right: 1rem;
`;

export const IconButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
  width: 2rem;
  transition: all .5s ease-in-out;
`;

export const MenuIcon = styled.div<{ opened: boolean }>`
  width: 2rem;
  height: 0.3rem;
  background: ${({ theme, opened }) => (opened ? 'transparent' : theme.colors.accent)};
  border-radius: 0.5rem;
  transition: all .5s ease-in-out;
  ${({ opened }) => (opened ? 'transform: translateX(-2rem);' : '')}


  &::before, &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 2rem;
    height: 0.3rem;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 0.5rem;
    transition: all .5s ease-in-out;
  } 

  &::before {
    transform: ${({ opened }) => (opened ? 'rotate(45deg) translate(1.5rem, -1.5rem)' : 'translateY(-0.7rem)')};
  }
  &::after {
    transform: ${({ opened }) => (opened ? 'rotate(-45deg) translate(1.5rem, 1.5rem)' : 'translateY(0.7rem)')};
  }
`;
