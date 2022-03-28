import React from 'react'
import { ITitle, TagName } from './interface'
import { StyledTitle } from './styled'

const Title:React.FC<ITitle & React.HTMLAttributes<HTMLHeadingElement>> = ({ children, level = 2, bold = false, className = '', ...rest }) => {
  const tag = `h${level}`

  return (
    <StyledTitle
      as={tag as TagName}
      {...rest}
    >
      {children}
    </StyledTitle>
  )
}

export default Title