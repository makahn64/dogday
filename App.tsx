import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from "@react-navigation/native";
import {HotTabNavigator} from "./src/navigation/HotTabNavigator";

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaProvider>
        <NavigationContainer>
          <HotTabNavigator/>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;
