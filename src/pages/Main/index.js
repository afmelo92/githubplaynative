/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
// import { Button, Text, TextInput } from 'react-native';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

// import { Container } from './styles';

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
    loading: false,
    refreshing: false,
  };

  async componentDidMount() {
    this.load();
    /**
     * const users = await AsyncStorage.getItem('users');

    if (users) {
      this.setState({ users: JSON.parse(users), refreshing: false });
    }
     */
  }

  componentDidUpdate(_, prevState) {
    const { users } = this.state;

    if (prevState.users !== users) {
      AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }

  load = async () => {
    const users = await AsyncStorage.getItem('users');

    if (users) {
      this.setState({ users: JSON.parse(users), refreshing: false });
    }
  };

  handleAddUser = async () => {
    const { users, newUser } = this.state;
    this.setState({ loading: true });

    try {
      const response = await api.get(`/users/${newUser}`);

      const data = {
        name: response.data.name,
        login: response.data.login,
        bio: response.data.bio,
        avatar: response.data.avatar_url,
      };

      this.setState({
        users: [...users, data],
        newUser: '',
        loading: false,
        refreshing: false,
      });

      Keyboard.dismiss();
    } catch (err) {
      this.setState({
        users: [...users],
        newUser: '',
        loading: false,
        refreshing: false,
      });
    }

    return this;
  };

  handleNavigate = user => {
    const { navigation } = this.props;
    navigation.navigate('User', { user });
  };

  refreshList = () => {
    this.setState({ refreshing: true, users: [] }, this.load);
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
    const { users, newUser, loading, refreshing } = this.state;

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
          <SubmitButton loading={loading} onPress={this.handleAddUser}>
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Icon name="add" size={20} color="#FFF" />
            )}
          </SubmitButton>
        </Form>

        <List
          onRefresh={this.refreshList} // Função dispara quando o usuário arrasta a lista pra baixo
          refreshing={refreshing}
          data={users}
          keyExtractor={user => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <ProfileButton onPress={() => this.handleNavigate(item)}>
                <ProfileButtonText>Ver perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />

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
Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
