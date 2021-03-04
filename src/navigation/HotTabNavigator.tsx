import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchBreedsScreen} from "../screens/SearchBreeds/SearchBreedsScreen";
import {Icon} from 'react-native-elements';
import {SearchStackNavigator} from "./SearchStackNavigator";

const Tab = createBottomTabNavigator();

export const HotTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator tabBarOptions={{ labelStyle: { marginTop: 0, marginBottom: 10}, iconStyle: { marginTop: 5}}}>
      <Tab.Screen name="Search" component={SearchStackNavigator} options={{
        tabBarIcon: ({color}) => <Icon name="search" color={color}/>
      }}/>
      <Tab.Screen name="Random" component={SearchBreedsScreen} options={{
          tabBarIcon: ({color}) => <Icon name="shuffle" color={color} />,
      }}/>
      <Tab.Screen name="Settings" component={SearchBreedsScreen} options={{
          tabBarIcon: ({color}) => <Icon name="settings" color={color} />,
      }}/>
    </Tab.Navigator>
  );
}
