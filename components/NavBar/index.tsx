import React from 'react';
import MenuItem, { IMenuItem } from './MenuItem';
import MainWrapper from './styles';

interface INavBar {
  menu: IMenuItem[]
}

const NavBar:React.FC<INavBar> = ({ menu }) => (
  <MainWrapper>
    {menu.map((item) => <MenuItem key={item.id} {...item} />)}
  </MainWrapper>
);

export default NavBar;
