import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MainWrapper, LogoWrapper, IconButton, MenuIcon,
} from './styles';
import { menuMock } from 'mocks/';
import Menu from './Menu';
import { StyledLink } from '@/shared/styledElements';

const NavBar:React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <MainWrapper>
        <LogoWrapper>
          <Link href="/" passHref>
            <StyledLink>
              <Image src="/assets/logo.svg" width={60} height={60} alt='Volver al inicio'/>
            </StyledLink>
          </Link>
        </LogoWrapper>
        <IconButton tabIndex={0} onClick={() => setOpenMenu(!openMenu)} >
          <MenuIcon opened={openMenu} />
        </IconButton>
      </MainWrapper>
      <Menu open={openMenu} menu={menuMock} />
    </>
  );
};

export default NavBar;
