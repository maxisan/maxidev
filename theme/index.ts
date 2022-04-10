import light from "./light";
import dark from "./dark";
import base from './base';
import ThemeCollection, { Depths } from "./interface";

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

const theme: ThemeCollection = {
  dark: {
    colors: {
      ...base.colors,
      ...dark.colors
    },
    depths: depths
  },
  light: {
    colors: {
      ...base.colors,
      ...light.colors
    },
    depths: depths
  }
}

export default theme;