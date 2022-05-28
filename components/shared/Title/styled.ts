import styled from 'styled-components';

const StyledTitle = styled.h1<{ bold: boolean }>`
  font-weight: ${({ bold }) => (bold ? '700' : '500')};
`;

export default StyledTitle;
