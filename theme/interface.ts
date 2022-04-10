export interface color {
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

export interface Theme {
  colors: {
    heart: color;
    ocean: color;
    sand: color;
    leaf: color;
    poison: color;
    onSurface: string;
    font: string;
  }
  depths: Depths;
}

export default interface ThemeCollection {
  dark: Theme;
  light: Theme;
}