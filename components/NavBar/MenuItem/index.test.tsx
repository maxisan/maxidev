import React from 'react';
import renderWithTheme from 'utils/testUtils';
import menuItemMockCollection from 'components/NavBar/mocks/menuMock';
import MenuItem from '.';

const menuItemMock = menuItemMockCollection[0];

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('<MenuItem />', () => {
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: '/',
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const render = () => renderWithTheme(<MenuItem {...menuItemMock} />);
  test('renders correctly', () => {
    const { baseElement } = render();
    expect(baseElement).toBeInTheDocument();
  });

  test('Should render the right title', () => {
    const { getByRole } = render();
    expect(getByRole('link', { name: menuItemMock.name })).toBeInTheDocument();
  });

  test('Should render the expected icon', () => {
    const { baseElement } = render();
    expect(baseElement.getElementsByTagName('svg')).not.toBeNull();
  });

  test('Should have the provided link as attribute', () => {
    const { getByRole } = render();
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', menuItemMock.href);
  });

  test('Should have the expected styles when inactive', () => {
    const { baseElement } = render();
    expect(baseElement).toMatchSnapshot();
  });

  test('Should have the expected styles when active', () => {
    useRouter.mockImplementationOnce(() => ({ pathname: menuItemMock.href }));
    const { baseElement } = render();
    Object.assign(window, { innerWidth: 400 });
    expect(baseElement).toMatchSnapshot();
  });
});
