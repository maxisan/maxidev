import { baseService } from "service"
import { IProject } from "types"

export const getAllProjects = ():Promise<IProject> => {
  return baseService('/data/projects.json')
}