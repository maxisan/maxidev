import React from 'react';
import renderWithTheme from 'utils/testUtils';
import MenuItem from '.';

const menuItemMock = {
  name: 'Home',
  href: '/',
  icon: 'home',
};

describe('<MenuItem />', () => {
  const render = () => renderWithTheme(<MenuItem {...menuItemMock} />);
  test('renders correctly', () => {
    const { baseElement } = render();
    expect(baseElement).ToBeInTheDocument();
  });

  test('Should render the right title', () => {
    const { getByRole } = render();
    expect(getByRole('link', { name: menuItemMock.name })).toBeInTheDocument();
  });

  test('Should render the expected icon', () => {
    const { getByRole } = render();
    expect(getByRole('img', { name: menuItemMock.icon })).toBeInTheDocument();
  });

  test('Should have the provided link as attribute', () => {
    const { getByRole } = render();
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', menuItemMock.href);
  });
});
