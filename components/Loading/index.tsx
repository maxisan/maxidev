import React from 'react';
import Image from 'next/image';
import OpenIcon from 'public/assets/open.svg';
import CloseIcon from 'public/assets/close.svg';
import {LoadingContainer, LogoContainer, TextContainer} from './styles';

function Loading() {
  return (
    <LoadingContainer>
      <LogoContainer>
        <Image src={OpenIcon} alt='loading' layout='fixed'/>
        <TextContainer>
          maxisan
        </TextContainer>
        <Image src={CloseIcon} alt='loading' layout='fixed'/>
      </LogoContainer>
    </LoadingContainer>
  );
}

export default Loading;
