import React, { useEffect } from 'react';

import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainPage from '../pages/MainPage';
import MyPage from '../pages/MyPage';
import AddPage from '../pages/AddPage';

const Tabs = createBottomTabNavigator();

const TabNavigator = ({ navigation, route }) => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        showLabel: true,
        style: {
          backgroundColor: '#fff',
          borderTopColor: '#eee',
          height: 40,
          fontSize: 10,
        },
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="MainPage" component={MainPage} />
      <Tabs.Screen name="MyPage" component={MyPage} />
      <Tabs.Screen name="AddPage" component={AddPage} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;