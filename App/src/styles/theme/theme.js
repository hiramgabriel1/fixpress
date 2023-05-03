import { extendTheme } from "native-base";
const newColorTheme = {
  dark: {
    1000: '#0F1621',
    2000: '#2F3643'
  },
  white: {
    1000: '#D9D7D6',
    2000: '#7A7A72'
  }
}

export const theme = extendTheme({ colors: newColorTheme });