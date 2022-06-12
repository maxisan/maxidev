import styled from 'styled-components';

const MainWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.sand.light};
  z-index: ${({ theme }) => theme.depths.header};
  flex-direction: row;
  height: 3.75rem;
  width: 100vw;
`;

export default MainWrapper;
