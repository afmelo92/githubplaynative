import React from 'react';
import { Button, Text } from 'react-native';

import { Container } from './styles';

export default function User({ route, navigation }) {
  const { name } = route.params;
  function navigateToMain() {
    navigation.navigate('Main');
  }

  function navigateToDetails() {
    navigation.navigate('Details', {
      address: 'R Monte Alegre',
      status: 'devedor',
    });
  }

  function updateOptions() {
    navigation.setOptions({ title: `${name} Updated!` });
  }

  return (
    <Container
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Text>User {name}</Text>
      <Button title="Update the title" onPress={updateOptions} />
      <Button title="Navigate to Main" onPress={navigateToMain} />
      <Button title="Navigate to Details" onPress={navigateToDetails} />
    </Container>
  );
}
