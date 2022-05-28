import React from 'react';
import type { NextPage } from 'next';
import NavBar from 'components/NavBar';
import Landing from '../components/Landing';

const menuMock = [
  {
    name: 'Home',
    href: '/',
    icon: 'home',
  },
  {
    name: 'About',
    href: '/about',
    icon: 'face',
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: 'mail',
  },
];

const Home: NextPage = () => (
  <>
    <NavBar menu={menuMock} />
    <Landing />
  </>
);

export default Home;
