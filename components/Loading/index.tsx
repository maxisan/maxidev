import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import OpenIcon from 'public/assets/open.svg';
import CloseIcon from 'public/assets/close.svg';
import {LoadingContainer, LogoContainer, TextContainer} from './styles';
import { gsap } from 'gsap';

function Loading() {
  const diamondRef = useRef(null);
  const textRef = useRef(null)
  const tl = useRef({})

  useEffect(() => {
    const rotation = {
      rotation: "+=90",
      duration: 0.7,
      delay: 0.3,
      ease: 'expo.inOut'
    }

    tl.current = gsap.timeline()
      .to(diamondRef.current, rotation)
      .to(diamondRef.current, rotation)
      .to(diamondRef.current, rotation)
      .to(diamondRef.current, rotation)
      .to(textRef.current, {
        duration: 1.2,
        width: "+=3.5em",
        ease: 'expo.inOut'
      })
      .to(textRef.current, {
        width: "-=2.7em",
        delay: 0.7
      })
  })

  return (
    <LoadingContainer>
      <LogoContainer ref={diamondRef}>
        <Image src={OpenIcon} alt='loading' layout='fixed'/>
        <TextContainer ref={textRef}>
          maxisan
        </TextContainer>
        <Image src={CloseIcon} alt='loading' layout='fixed'/>
      </LogoContainer>
    </LoadingContainer>
  );
}

export default Loading;
