import {Theme} from 'react-native-elements';

type RecursivePartial<T> = {[P in keyof T]?: RecursivePartial<T[P]>};

export const LightTheme: RecursivePartial<Theme> = {
  colors: {
    black: '#202020',
  },
};

export const DarkTheme: RecursivePartial<Theme> = {
  colors: {
    black: '#ffffff',
    white: '#101010',
  },
};
