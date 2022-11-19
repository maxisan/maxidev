import Loading from 'components/Landing/InitialLoading';
import React from 'react';
import { BsMouse, BsChevronDoubleDown } from 'react-icons/bs'
import { MainWrapper, ScrollIconContainer } from './styles';

const Landing: React.FC = () => (
  <MainWrapper>
    <video src="/assets/videos/landing.webm" autoPlay loop muted />
    <Loading />
    <ScrollIconContainer>
      <BsMouse size={'2rem'}/>
      <BsChevronDoubleDown />
    </ScrollIconContainer>
  </MainWrapper>
);

export default Landing;
