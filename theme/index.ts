import light from "./light";
import dark from "./dark";
import base from './base';

const theme = {
  dark: {
    ...base,
    ...dark,
    colors: {
      ...base.colors,
      ...dark.colors
    },
  },
  light: {
    ...base,
    ...light,
    colors: {
      ...base.colors,
      ...light.colors
    },
  }
}

export default theme;