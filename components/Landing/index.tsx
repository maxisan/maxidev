import React from 'react';
import Title from '@/shared/Title';
import { MainWrapper, TitleWrapper } from './styles';

const Landing: React.FC = () => (
  <MainWrapper>
    <TitleWrapper>
      <Title
        level={1}
        bold
      >
        ¡Hola! Soy Max,
      </Title>
      <Title
        level={1}
        className="subtitle"
      >
        Fullstack developer
      </Title>
    </TitleWrapper>
  </MainWrapper>
);

export default Landing;
