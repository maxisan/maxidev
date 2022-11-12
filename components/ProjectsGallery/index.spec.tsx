import { RenderResult } from "@testing-library/react"
import renderWithTheme from "utils/testUtils"
import ProjectsGallery from "."

describe('<ProjectsGallery>', () => {

  const render = (): RenderResult => renderWithTheme(<ProjectsGallery />)

  test('Should render the expected title and filter selector', () => {
    
  })

  test('Should render the expected items quantity', () => {

  })

  test('Should filter by category and scope', () => {

  })

  test('Should render the see more button when are more than four projects to see', () => {

  })
})