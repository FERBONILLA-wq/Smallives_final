// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/home';
import AnimalesScreen from './screens/animals';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="CALENDAR" component={HomeScreen} />
        <Tab.Screen name="ANIMALS" component={AnimalesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
