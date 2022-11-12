import React from 'react'
import Image from 'next/image'
import { ContentWrapper, ImageWrapper, MainWrapper } from './styles'
import Techs from './Techs'
import { IProject, MultilingualText } from 'types'
import { useRouter } from 'next/router'

const ProjectElement: React.FC<IProject> = ({
  title,
  shortDescription,
  techs,
  scope,
  category,
  projectUrl,
  imageUrl = '/assets/projects/default.png',
  longDescription,
}) => {
  const { locale } = useRouter();

  return (
    <MainWrapper>
      <Techs techs={techs}/>
      <ImageWrapper>
        <Image src={imageUrl} alt="" height={300} width={300}/>
      </ImageWrapper>
      <ContentWrapper>
        <h3>{title}</h3>
        <p>{shortDescription[locale as keyof MultilingualText|| 'es']}</p>
      </ContentWrapper>
    </MainWrapper>
  )
}

export default ProjectElement