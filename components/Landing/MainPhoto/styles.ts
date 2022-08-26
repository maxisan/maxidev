import styled from 'styled-components';

export type Side = 'left' | 'right'
export type EyePosition = {left: '0%' | '30%' | '60%', top: '0%' | '30%' | '60%'}

export const MainWrapper = styled.div`
  position: relative;
  width: fit-content;
  height: max-content;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 50%;
  border: solid 10px ${({theme}) => theme.colors.accent};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`

export const Glasses = styled.div`
  position: absolute;
  top: 28%;
  left: 26%;
  width: 43%;
  opacity: 0;
  .glassesImg {
    width: 100%;
  }
`

export const EyeWrapper = styled.div<{side: Side}>`
  position: absolute;
  top: ${({side}):string => side === 'left' ? '25%' : '15%'};
  left: ${({side}):string => side === 'left' ? '12%' : '62%'};
  width: 30%;
  height: 50%;
`

export const Eye = styled.img<{eyePosition: EyePosition}>`
  position: absolute;
  height: 50%;
  width: fit-content;
  top: ${({eyePosition}): string => eyePosition.top || '30%'};
  left: ${({eyePosition}): string => eyePosition.left || '30%'};
  transition: all .1s;
`

export const Handwriting = styled.p`
  font-family: 'Indie Flower', cursive;
  position: absolute;
  font-size: 1.2rem;
  rotate: 15deg;
  top: 20%;
  left: 70%;
`