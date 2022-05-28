export interface Color {
  main: string;
  light?: string;
  dark?: string;
}

export interface Depths {
  content: string;
  popover: string;
  tooltip: string;
  fab: string;
  toast: string;
  header: string;
  backdrop: string;
  dialog: string;
  loader: string;
}

export interface Viewports {
  tablet: string;
  tabletL: string;
  desktop: string;
  desktopXl: string;
}

export interface Theme {
  colors: {
    heart: Color;
    ocean: Color;
    sand: Color;
    leaf: Color;
    poison: Color;
    onSurface: string;
    font: string;
  }
  depths: Depths;
  viewports: Viewports
}

export default interface ThemeCollection {
  dark: Theme;
  light: Theme;
}

export enum ThemeTypes {
  dark = 'dark',
  light = 'light',
}
