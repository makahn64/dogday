import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchBreedsScreen} from '../screens/SearchBreeds/SearchBreedsScreen';
import {KennelScreen} from '../screens/KennelScreen/KennelScreen';
import {useTheme} from '../hooks/useTheme';

const Stack = createStackNavigator();

// TODO Type the parameters, always fun with react-nav
export const SearchStackNavigator = () => {
  const {surfaceColor, textColor} = useTheme();
  // @ts-ignore
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchBreedsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kennel"
        component={KennelScreen}
        options={{
          headerTitleStyle: {color: textColor},
          headerStyle: {backgroundColor: surfaceColor},
        }}
      />
    </Stack.Navigator>
  );
};
