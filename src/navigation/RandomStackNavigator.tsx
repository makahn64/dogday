import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {KennelScreen} from '../screens/KennelScreen/KennelScreen';
import {useTheme} from '../hooks/useTheme';

const Stack = createStackNavigator();

// this is just here to get us a header in a cheap and easy way...
export const RandomStackNavigator = () => {
  const {surfaceColor, textColor} = useTheme();

  return (
    <Stack.Navigator>
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
