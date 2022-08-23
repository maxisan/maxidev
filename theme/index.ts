import light from './light';
import dark from './dark';
import base from './colors';
import ThemeCollection, { Depths } from './interface';
import colors from './colors';



const depths: Depths = {
  content: '0',
  popover: '5',
  tooltip: '10',
  fab: '15',
  toast: '20',
  header: '25',
  backdrop: '30',
  dialog: '35',
  loader: '40',
};

const theme: ThemeCollection = {
  dark: {
    colors: {
      main: colors.dark,
      neutral: colors.neutral,
      accent: colors.accent,
      ...dark.colors,
    },
    depths,
  },
  home: {
    colors: {
      main: colors.home,
      neutral: colors.neutral,
      accent: colors.accent,
      ...light.colors,
    },
    depths,
  },
  about: {
    colors: {
      main: colors.about,
      neutral: colors.neutral,
      accent: colors.accent,
      ...light.colors,
    },
    depths,
  },
  projects: {
    colors: {
      main: colors.projects,
      neutral: colors.neutral,
      accent: colors.accent,
      ...light.colors,
    },
    depths,
  },
  contact: {
    colors: {
      main: colors.contact,
      neutral: colors.neutral,
      accent: colors.accent,
      ...light.colors,
    },
    depths,
  }
};

export default theme;
