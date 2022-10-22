import React from "react";
import { IconWrapper } from "./styles";
const Icons = require('react-icons/si')

interface IBrandIcon {
  iconName:string;
  size?: number;
  color?: string;
}

const BrandIcon:React.FC<IBrandIcon> = ({iconName, size, color }) => {
  const icon = Icons[iconName]

  if (!icon) {
    return null
  }

  const iconElement = React.createElement(icon);
  return (
    <IconWrapper 
      size={size}
      color={color}
      aria-hidden
    >
      {iconElement}
    </IconWrapper>);
};

export default BrandIcon