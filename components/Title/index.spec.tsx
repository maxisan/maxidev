import { render } from '@testing-library/react'
import 'jest-styled-components'
import Title from '.'

describe('Title', () => {
  describe('General test', () => {
    it('Should render without errors', () => {
      const view = render(<Title />)
      expect(view.baseElement).toBeInTheDocument()
    })
  
    it('Should render the right text', () => {
      const { queryByText } = render(<Title>Test title</Title>)
      const title = queryByText('Test title')
      expect(title).toBeInTheDocument()
    })
  })

  describe('Bold prop', () => {
    test('The title should have font-size 600 by default', () => {
      const { getByText } = render(<Title>Test title</Title>)
      expect(getByText('Test title')).toHaveStyleRule('font-weight', '600')
    })

    test('The title should have font-size 700 when bold is true', () => {
      const { getByText } = render(<Title bold>Test title</Title>)
      expect(getByText('Test title')).toHaveStyleRule('font-weight', '700')
    })
  })

  describe('Level prop', () => {
    it('Should render a h2 element by default', () => {
      const { queryByRole } = render(<Title>Test title</Title>)
      const title = queryByRole('heading', {
        level: 2
      })
      expect(title).toBeInTheDocument()
    })
  
    it('Should render a h1 element when level prop is 1', () => {
      const { queryByRole } = render(<Title level={1}>Test title</Title>)
      const title = queryByRole('heading', {
        level: 1
      })
      expect(title).toBeInTheDocument()
    })
  
    it('Should render a h2 element when level prop is 2', () => {
      const { queryByRole } = render(<Title level={2}>Test title</Title>)
      const title = queryByRole('heading', {
        level: 2
      })
      expect(title).toBeInTheDocument()
    })
  
    it('Should render a h3 element when level prop is 3', () => {
      const { queryByRole } = render(<Title level={3}>Test title</Title>)
      const title = queryByRole('heading', {
        level: 3
      })
      expect(title).toBeInTheDocument()
    })
  
    it('Should render a h4 element when level prop is 4', () => {
      const { queryByRole } = render(<Title level={4}>Test title</Title>)
      const title = queryByRole('heading', {
        level: 4
      })
      expect(title).toBeInTheDocument()
    })
  })

})