import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MainWrapper, LogoWrapper, IconButton, MenuIcon, MenuWrapper, CtaWrapper,
} from './styles';
import { menuMock } from 'mocks/';
import Menu from './Menu';
import { StyledButton, StyledLink } from '@/shared/styledElements';

const NavBar:React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [onTop, setOnTop] = useState(true);

  const checkIsOnTop = (e: Event) => {
    if (window.scrollY === 0) setOnTop(true)
    else setOnTop(false)
  }

  useEffect(() => {
    document.addEventListener('scroll', checkIsOnTop)
    return () => {
      document.removeEventListener('scroll', checkIsOnTop)
    }
  }, [])
  

  return (
    <>
      <MainWrapper onTop={onTop}>
        <MenuWrapper>
          <LogoWrapper>
            <Link href="/" passHref>
              <StyledLink onClick={() => setOpenMenu(false)}>
                <Image 
                  src="/assets/logo.svg"
                  width={60}
                  height={60} 
                  alt='Volver al inicio' 
                  layout='fixed'
                />
              </StyledLink>
            </Link>
          </LogoWrapper>
          <IconButton tabIndex={0} onClick={() => setOpenMenu(!openMenu)} >
            <MenuIcon opened={openMenu} />
          </IconButton>
        </MenuWrapper>
        <CtaWrapper>
          <Link href={'/contact'} passHref>
            <a>
              <StyledButton>
                Contactame
              </StyledButton>
            </a>
          </Link>
        </CtaWrapper>
      </MainWrapper>
      <Menu open={openMenu} menu={menuMock} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default NavBar;
