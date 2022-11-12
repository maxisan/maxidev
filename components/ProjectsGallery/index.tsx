import { StyledSelect } from '@/shared/styledElements'
import React, { useEffect, useState } from 'react'
import { getAllProjects } from 'service/projectsService'
import { IProject, ProjectCategory, ProjectScope } from 'types'
import ProjectElement from './ProjectElement'
import { FiltersWrapper, MainWrapper, ProjectsWrapper } from './styles'

const ProjectsGallery:React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([])
  const [filters, setFilters] = useState<{
    scope?: ProjectScope,
    category?: ProjectCategory
  }>({})

  const getProjects = async () => {
    const projectsResponse = await getAllProjects()
    setProjects(projectsResponse)
  }

  useEffect(() => {
    getProjects()
  }, [])

  const selectFilter = () => {

  }

  return (
    <MainWrapper>
      <FiltersWrapper>
        <StyledSelect>
          <option value="value1">Value 1</option>
          <option value="value2">Value 2</option>
          <option value="value3">Value 3</option>
        </StyledSelect>
      </FiltersWrapper>

      <ProjectsWrapper>
        {projects.map(project => (
          <ProjectElement
            key={project.id}
            {...project}
          />
        ))}
      </ProjectsWrapper>
    </MainWrapper>
  )
}

export default ProjectsGallery