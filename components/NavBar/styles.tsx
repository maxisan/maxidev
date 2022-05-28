import styled from 'styled-components';

const MainWrapper = styled.nav`
  position: fixed;
  width: 100vw;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.sand.light};
`;

export default MainWrapper;
