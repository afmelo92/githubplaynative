import React from 'react';
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
