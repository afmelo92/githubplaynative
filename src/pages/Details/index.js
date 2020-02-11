/**
 * import React from 'react';
import { TextInput, Button, View, Text } from 'react-native';

// import { Container } from './styles';

export default function Details({ route, navigation }) {
  const { address, status } = route.params;
  const [postText, setPostText] = React.useState('');

  function navigateToMain() {
    navigation.navigate('Main', { post: postText });
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details</Text>
      <Text>Adress: {address}</Text>
      <Text>Status: {status}</Text>
      <TextInput
        multiline
        placeholder="Quer sair do SERASA?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button title="Navigate to Main" onPress={navigateToMain} />
    </View>
  );
}

 */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class Details extends Component {
  state = {};

  componentDidMount() {
    const { route } = this.props;
    console.tron.log(route);
  }

  render() {
    const { route } = this.props;

    return (
      <Container>
        <WebView
          source={{ uri: `https://github.com/${route.params.repo.full_name}` }}
        />
      </Container>
    );
  }
}
Details.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.shape({
        login: PropTypes.string,
        avatar: PropTypes.string,
        name: PropTypes.string,
        bio: PropTypes.string,
      }),
    }),
  }).isRequired,
};
