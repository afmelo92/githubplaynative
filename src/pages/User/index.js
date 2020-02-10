/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

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

export default class User extends Component {
  state = {
    stars: [],
    loading: false,
  };

  async componentDidMount() {
    const { route } = this.props;

    this.setState({ loading: true });

    const response = await api.get(`/users/${route.params.user.login}/starred`);

    this.setState({ stars: response.data, loading: false });
  }
  /**
   *const { name } = route.params;
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
   */

  render() {
    const { route } = this.props;
    const { stars, loading } = this.state;

    const { user } = route.params;

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        {loading ? (
          <ActivityIndicator color="#7159c1" />
        ) : (
          <Stars
            data={stars}
            keyExtractor={star => String(star.id)}
            renderItem={({ item }) => (
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        )}
      </Container>
    );
  }
}
User.propTypes = {
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
