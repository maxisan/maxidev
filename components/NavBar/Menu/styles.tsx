import styled from 'styled-components';

const MainWrapper = styled.div<{ opened:boolean }>`
  height: ${({ opened }) => (opened ? '100vh' : '0px')};
  background-color: ${({theme, opened}) => opened && theme.colors.main[200]};
  position: fixed;
  padding-top: 100px;
  padding-left: 2rem;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  transition: height .4s ease-in-out, background-color .4s ease-in-out;
  overflow: hidden;
`;

export default MainWrapper;
