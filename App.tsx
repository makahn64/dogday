import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {HotTabNavigator} from './src/navigation/HotTabNavigator';
import {ThemeProvider, Theme} from 'react-native-elements';
import {LightTheme} from './src/themes/themes';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ThemeProvider theme={LightTheme as Theme}>
        <SafeAreaProvider>
          <NavigationContainer>
            <HotTabNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
