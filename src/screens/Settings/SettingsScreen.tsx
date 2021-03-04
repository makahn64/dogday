import React, {FC} from 'react';
import {useTheme} from '../../hooks/useTheme';
import {Button, Text} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {}

export const SettingsScreen: FC<Props> = (props) => {
  const {surfaceColor, isDark, setDarkTheme} = useTheme();

  const toggleTheme = () => {
    setDarkTheme(!isDark);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: surfaceColor,
        flex: 1,
        padding: 20,
      }}>
      <Text h4>Settings</Text>
      <Button
        onPress={toggleTheme}
        title={`Switch to ${isDark ? 'Light Mode' : 'Dark Mode'}`}
        buttonStyle={{width: '100%', marginTop: 100}}
      />
    </SafeAreaView>
  );
};
