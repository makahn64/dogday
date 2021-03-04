import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {SearchBreedsScreen} from "../screens/SearchBreeds/SearchBreedsScreen";
import {KennelScreen} from "../screens/KennelScreen/KennelScreen";

const Stack = createStackNavigator();

interface Props {}

export const SearchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchBreedsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Kennel" component={KennelScreen} options={({route}) => ({ title: route.params.breed.toUpperCase()})}/>
    </Stack.Navigator>
  );
}
