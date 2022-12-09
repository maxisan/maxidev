import light from './light';
import dark from './dark';
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
    },
    depths,
  },
  light: {
    colors: {
      main: colors.caterpie,
      neutral: colors.neutral,
    },
    depths,
  }
};

export default theme;
