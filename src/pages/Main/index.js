/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
// import { Button, Text, TextInput } from 'react-native';
import { Container, Form, Input, SubmitButton } from './styles';

// import { Container } from './styles';

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
  };

  handleAddUser = async () => {
    const { users, newUser } = this.state;

    const response = await api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    this.setState({
      users: [...users, data],
      newUser,
    });

    Keyboard.dismiss();
  };

  /**
   * React.useEffect(() => {
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
   */

  render() {
    const { users, newUser } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuario"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            returnKeyType="yahoo"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton onPress={this.handleAddUser}>
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
}
