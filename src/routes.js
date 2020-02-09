import React from 'react';
import { Button } from 'react-native';
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
      <Stack.Screen name="Main" component={Main} options={{ title: 'Home' }} />
      <Stack.Screen
        name="User"
        options={{ title: 'Usuários' }}
        // options={({ route }) => ({ title: route.params.name })}
        component={User}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
