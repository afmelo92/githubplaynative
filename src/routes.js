import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';
import Details from './pages/Details';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: 'GithubPlay' }}
      />
      <Stack.Screen
        name="User"
        options={({ route }) => ({ title: route.params.user.name })}
        // options={({ route }) => ({ title: route.params.name })}
        component={User}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
