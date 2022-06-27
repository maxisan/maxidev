import styled from 'styled-components';

export const MenuItemWrapper = styled.a<{ isActive: boolean }>`
  position: relative;
  display: flex;
  height: 100%;
  padding-bottom: 0.5rem;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  text-align: center;
  font-weight: ${({ isActive }) => (isActive ? 900 : 500)};
  color: ${({ isActive, theme }) => (isActive ? '' : theme.colors.heart.dark)};
`;

export const IconWrapper = styled.div<{ isActive: boolean }>`
  color: ${({ theme }) => theme.colors.heart.dark};
  font-size: 1.4rem;
  
  ${({ isActive, theme }) => isActive && `
    color: ${theme.colors.onSurface};
    background-color: ${theme.colors.heart.dark};
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border-color: red blue transparent transparent;

    position: absolute;
    top: -1.5rem;
    mask-composite: subtract;
    &::before {
      content: '';
      background-image: linear-gradient(to top, ${theme.colors.onSurface}, ${theme.colors.onSurface} 50%, transparent 50%, transparent);
      height: 4rem;
      width: 4rem;
      position: absolute;
      border-radius: 0 0 50% 50%;
      z-index: -1;
  `}
`;
