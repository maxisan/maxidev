import styled from 'styled-components'

export const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;

  .hiCat {
    position: absolute;
    bottom: 3rem;
    right: -200px;
    width: 200px;
    transform: rotate(-50deg);
  }
`

export const TitleWrapper = styled.div`
  margin-top: 10rem;
  .subtitle {
    font-size: 1.8rem;
  }
`