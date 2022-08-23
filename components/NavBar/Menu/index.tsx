import React from 'react';
import { IMenuItem } from 'types';
import MenuItem from '../MenuItem';
import MainWrapper from './styles';

interface IMenu {
  open: boolean;
  menu: IMenuItem[];
  setOpenMenu: (open: boolean) => void;
}

const Menu:React.FC<IMenu> = ({ menu, open, setOpenMenu}) => (
  <MainWrapper opened={open}>
    {open && menu.map((item) => <MenuItem key={item.id} item={item} setOpenMenu={setOpenMenu} />)}
  </MainWrapper>
);

export default Menu;
