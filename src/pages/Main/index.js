import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, Text, TextInput } from 'react-native';
import { Container, Form, Input, SubmitButton } from './styles';

// import { Container } from './styles';

export default function Main({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  function navigateToUsers() {
    navigation.navigate('User', { name: 'Andre' });
  }
  function navigateToDetails() {
    navigation.navigate('Details');
  }

  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuario"
        />
        <SubmitButton>
          <Icon name="add-circle-outline" size={20} color="#FFF" />
        </SubmitButton>
      </Form>

      {/**
       * {route.params?.post ? (
        <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      ) : (
        <Text />
      )}

      <Button title="Navigate to Users" onPress={navigateToUsers} />
      <Button title="Navigate to Details" onPress={navigateToDetails} />
       */}
    </Container>
  );
}
