import React from 'react';
import renderWithTheme from 'utils/testUtils';
import NavBar from '.';
import menuMock from './mocks/menuMock';

describe('NavBar', () => {
  const render = () => renderWithTheme(<NavBar menu={menuMock} />);

  it('renders correctly', () => {
    const wrapper = render();
    expect(wrapper.baseElement).toBeInTheDocument();
  });

  it('renders the correct number of links', () => {
    const { getAllByRole } = render();
    expect(getAllByRole('link')).toHaveLength(3);
  });

  it('renders the correct number of icons', () => {
    const { getAllByRole } = render();
    expect(getAllByRole('img')).toHaveLength(3);
  });

  it('renders the expected text', () => {
    const { getByText } = render();
    menuMock.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });

  it('Should have the expected styles on desktop', () => {
    const wrapper = render();
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it('Should have the expected styles on mobile', () => {
    Object.assign(window, { innerWidth: 400 });
    const wrapper = render();
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
