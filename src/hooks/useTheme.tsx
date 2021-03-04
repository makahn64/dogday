import {useContext, useState} from 'react';
import {ThemeContext} from 'react-native-elements';
import {DarkTheme, LightTheme} from '../themes';

export const useTheme = () => {
  const [isDark, setDark] = useState(false);
  const {
    theme: {colors},
    replaceTheme,
    updateTheme,
  } = useContext(ThemeContext);

  const setDarkTheme = (isDark: boolean) => {
    setDark(isDark);
    replaceTheme(isDark ? DarkTheme : LightTheme);
  };

  // extending the RNE theme is a better sol'n, but a wee bit of work
  return {
    colors,
    replaceTheme,
    updateTheme,
    surfaceColor: colors?.white || '#ffffff',
    textColor: colors?.black || '#000',
    isDark,
    setDarkTheme,
  };
};
