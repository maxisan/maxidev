export type Scope = 'frontend' | 'backend' | 'fullstack';
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
export type ProjectCategory = 'work' | 'challenge' | 'labs';

export type MultilingualText = {
  en?: string;
  es?: string;
  pt?: string;
};

export interface IMenuItem {
  id: string;
  title: string;
  href: string;
}

export interface IProjectTech {
  name: string;
  iconName: string;
}

export interface IProject {
  id:string;
  title: string | MultilingualText;
  shortDescription: MultilingualText;
  techs: IProjectTech[];
  scope: Scope;
  category: ProjectCategory;
  projectUrl?: string;
  imageUrl?: string;
  longDescription?: MultilingualText;

}