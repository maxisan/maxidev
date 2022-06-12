import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faFaceLaughBeam, faEnvelope } from '@fortawesome/free-regular-svg-icons';

const menuMock = [
  {
    id: 2,
    name: 'Sobre mí',
    href: '/about',
    icon: <FontAwesomeIcon icon={faFaceLaughBeam} />,
  },
  {
    id: 3,
    name: 'Proyectos',
    href: '/projects',
    icon: <FontAwesomeIcon icon={faBriefcase} />,
  },
  {
    id: 5,
    name: '¡Contactame!',
    href: '/contact',
    icon: <FontAwesomeIcon icon={faEnvelope} />,
  },
];

export default menuMock;
