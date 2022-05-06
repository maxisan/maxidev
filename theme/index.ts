import light from "./light";
import dark from "./dark";
import base from './base';
import ThemeCollection, { Depths, Viewports } from "./interface";

const depths: Depths = {
  content: '0',
  popover: '5',
  tooltip: '10',
  fab: '15',
  toast: '20',
  header: '25',
  backdrop: '30',
  dialog: '35',
  loader: '40'
}

const viewports: Viewports = {
  tablet: '@media (min-width: 640px)',
  tabletL: '@media (min-width: 768px)',
  desktop: '@media (min-width: 1024px)',
  desktopXl: '@media (min-width: 1280px)'
}

const theme: ThemeCollection = {
  dark: {
    colors: {
      ...base.colors,
      ...dark.colors
    },
    depths,
    viewports
  },
  light: {
    colors: {
      ...base.colors,
      ...light.colors
    },
    depths,
    viewports
  }
}

export default theme;