import styled from 'styled-components';

export const StyledTitle = styled.h1<{bold: boolean}>`
  font-weight: ${({ bold }) => bold ? '700' : '500'};
`