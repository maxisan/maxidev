import React from 'react'
import Image from 'next/image'
import { ContentWrapper, ImageWrapper, MainWrapper } from './styles'
import Techs from './Techs'

const techMock = [{
  name: 'React',
  iconName: 'SiReact',
}]

const ProjectElement: React.FC = () => {
  return (
    <MainWrapper>
      <Techs techs={techMock}/>
      <ImageWrapper>
        <Image src="/assets/projects/Frame-21-1.png" alt="" height={300} width={300}/>
      </ImageWrapper>
      <ContentWrapper>
        <h3>Project title</h3>
        <p>Project description that says something</p>
      </ContentWrapper>
    </MainWrapper>
  )
}

export default ProjectElement