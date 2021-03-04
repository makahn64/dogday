import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchBreedsScreen} from '../screens/SearchBreeds/SearchBreedsScreen';
import {KennelScreen} from '../screens/KennelScreen/KennelScreen';

const Stack = createStackNavigator();

// TODO Type the parameters, always fun with react-nav
export const SearchStackNavigator = () => {
  // @ts-ignore
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchBreedsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Kennel" component={KennelScreen} />
    </Stack.Navigator>
  );
};
