import BrandIcon from '@/shared/BrandIcons'
import React from 'react'
import { MainWrapper } from './styles'

interface ITech {
  name: string;
  iconName: string;
  color?: string;
  size?: number;
}

const Techs:React.FC<{techs: ITech[]}> = ({techs = []}) => {
  return (
    <MainWrapper>
      {techs.map((tech) => (
        <BrandIcon key={tech.iconName} {...tech}/>
      ))}
    </MainWrapper>
  )
}

export default Techs