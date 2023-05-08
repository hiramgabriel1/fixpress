import { extendTheme } from "native-base";
const newColorTheme = {
  dark: {
    1000: '#0F1621',
    2000: '#2F3643',
    3000: '#18202E'
  },
  white: {
    1000: '#D9D7D6',
    2000: '#7A7A72',
    3000: '#4E4F49'
  },
}

export const theme = extendTheme({ colors: newColorTheme });