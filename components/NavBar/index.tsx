import React from 'react';
import { IMenuItem } from './MenuItem';
import MainWrapper from './styles';

interface INavBar {
  menu: IMenuItem[]
}

const NavBar:React.FC<INavBar> = ({ menu }) => (
  <MainWrapper>
    {menu.map(({ name, href, icon }) => <p>{name + href + icon}</p>)}
  </MainWrapper>
);

export default NavBar;
