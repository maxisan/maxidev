import React from 'react';
import { useRouter } from 'next/router';
import { IconWrapper, MenuItemWrapper } from './styles';

export interface IMenuItem {
  id: number;
  name: string;
  href: string;
  icon: JSX.Element;
}

const MenuItem:React.FC<IMenuItem> = ({
  name,
  href,
  icon,
}) => {
  const { pathname } = useRouter();
  return (
    <MenuItemWrapper
      href={href}
      isActive={href === pathname}
    >
      <IconWrapper isActive={href === pathname}>
        {icon}
      </IconWrapper>
      <p>{name}</p>
    </MenuItemWrapper>
  );
};

export default MenuItem;
