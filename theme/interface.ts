export interface Color {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
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
    pink: Color;
    yellow: Color;
    green: Color;
    blue: Color;
    neutral: Color;
    onSurface: string;
    font: string;
  }
  depths: Depths;
}

export default interface ThemeCollection {
  dark: Theme;
  light: Theme;
}

export enum ThemeTypes {
  dark = 'dark',
  light = 'light',
}
