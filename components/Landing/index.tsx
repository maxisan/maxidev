import React from 'react'
import Image from 'next/image'
import Title from '@/shared/Title'
import hiCat from 'public/assets/hiCat.svg'
import { MainWrapper, TitleWrapper } from './styles'

const Landing: React.FC = () => {
  return (
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
          className='subtitle'
        >
          Fullstack developer
        </Title>
      </TitleWrapper>
    </MainWrapper>
  )
}

export default Landing