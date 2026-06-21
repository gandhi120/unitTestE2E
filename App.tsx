import React, { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');

  return (
    <View>
      <TextInput
        testID="emailInput"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <Pressable testID="loginButton">
        <Text>Login</Text>
      </Pressable>

      <Text testID="emailText">{email}</Text>
    </View>
  );
}
