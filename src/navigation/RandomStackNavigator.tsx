import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {KennelScreen} from '../screens/KennelScreen/KennelScreen';

const Stack = createStackNavigator();

// this is just here to get us a header in a cheap and easy way...
export const RandomStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Kennel" component={KennelScreen} />
    </Stack.Navigator>
  );
};
