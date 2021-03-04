import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchBreedsScreen} from '../screens/SearchBreeds/SearchBreedsScreen';
import {Icon} from 'react-native-elements';
import {SearchStackNavigator} from './SearchStackNavigator';
import {KennelScreen} from '../screens/KennelScreen/KennelScreen';
import {RandomStackNavigator} from './RandomStackNavigator';
import {useTheme} from '../hooks/useTheme';
import {SettingsScreen} from '../screens/Settings/SettingsScreen';

const Tab = createBottomTabNavigator();

export const HotTabNavigator: React.FC = () => {
  const {surfaceColor, textColor} = useTheme();
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {marginTop: 0, marginBottom: 10, color: textColor},
        iconStyle: {marginTop: 5},
        tabStyle: {backgroundColor: surfaceColor},
      }}>
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          tabBarIcon: ({color}) => <Icon name="search" color={color} />,
        }}
      />
      <Tab.Screen
        name="Random"
        component={RandomStackNavigator}
        options={{
          tabBarIcon: ({color}) => <Icon name="shuffle" color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="settings" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
