import React from 'react';
import MainPhoto from './MainPhoto';
import { MainPhotoWrapper, MainWrapper, TitleWrapper } from './styles';

const Landing: React.FC = () => (
  <MainWrapper>
    <TitleWrapper>
      <h1 className='mega-title'>¡Hola! Soy Max,</h1>
      <h1 className='mega-title'>Full stack developer</h1>
    </TitleWrapper>
    <MainPhotoWrapper>
      <MainPhoto />
    </MainPhotoWrapper>
  </MainWrapper>
);

export default Landing;
