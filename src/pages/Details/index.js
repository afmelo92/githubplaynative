/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

import { Container } from './styles';

export default class Details extends Component {
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
      repo: PropTypes.shape({
        full_name: PropTypes.string,
      }),
    }),
  }).isRequired,
};
