import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  12.5% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  37.5% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  62.5% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  87.5% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const openDiamond = keyframes`
  0% {
    width: 100px;
  }
  50% {
    width: 300px;
  }
  100% {
    width: 120px;
  }
`
const TextAppear = keyframes`
  0% {
    width: 0px;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 120px;
  }
`

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
  transition: all;
  animation-name: ${rotateAnimation}, ${openDiamond};
  animation-duration: 3s, 2s; 
  animation-timing-function: ease-in-out;
  animation-delay: 0ms, 3000ms;
  flex-shrink: 0;
`

export const TextContainer = styled.div`
  font-family: 'Signika Negative', sans-serif;
  font-size: 5.5rem;
  line-height: 1;
  width: 0px;
  margin: 0 0.5rem;
  overflow: hidden;
  transition: all;
  animation-name: ${TextAppear};
  animation-duration: 2s; 
  animation-timing-function: ease-in-out;
  animation-delay: 3200ms;
`

