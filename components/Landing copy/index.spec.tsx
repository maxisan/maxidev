import renderWithTheme from 'utils/testUtils';
import React from 'react';
import Landing from '.';

describe('<Landing />', () => {
  describe('Texts', () => {
    test('Should render the main greeting', () => {
      const { getByText } = renderWithTheme(<Landing />);
      expect(getByText('¡Hola! Soy Max,')).toBeInTheDocument();
      expect(getByText('Fullstack developer')).toBeInTheDocument();
    });
  });
});
