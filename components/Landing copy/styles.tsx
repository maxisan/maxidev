import styled from 'styled-components';
import viewports from 'styles/utils';

export const MainWrapper = styled.div`
  min-height: calc(100vh - 10rem);
  width: 100vw;
  margin-top: 100px;
  padding: 1rem 2rem;
  padding-bottom: 0;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 3rem;

  ${viewports.tablet} {
    grid-template-rows: 100%;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

`;

export const TitleWrapper = styled.div`
  text-align: center;
  .mega-title {
    font-size: 3rem;
    ${viewports.tablet} {
      text-align: left;
    }
    ${viewports.desktop} {
      font-size: 4rem;
    }
    ${viewports.desktopXxl} {
      font-size: 6rem;
    }
  }
`;

export const MainPhotoWrapper = styled.div`
`
