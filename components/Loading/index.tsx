import React from 'react';
import Image from 'next/image';
import LoadingImage from 'public/assets/loading.gif';
import LoadingContainer from './styles';

function Loading() {
  return (
    <LoadingContainer>
      <Image src={LoadingImage} alt="loading" />
    </LoadingContainer>
  );
}

export default Loading;
