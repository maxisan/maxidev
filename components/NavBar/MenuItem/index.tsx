import React from 'react';
import Link from 'next/link';
import StyledMenuItem from './styles';
import { StyledLink } from '@/shared/styledElements';
import { IMenuItem } from 'types';

interface IMenuItemProps {
  item: IMenuItem;
  setOpenMenu: (open: boolean) => void;
}

const MenuItem:React.FC<IMenuItemProps> = ({
  item:{
    title,
    href,
  },
  setOpenMenu
}) => (
  <Link href={href} passHref> 
    <StyledLink onClick={() => setOpenMenu(false)}>
      <StyledMenuItem>{title}</StyledMenuItem>
    </StyledLink>
  </Link>
);

export default MenuItem;
