import React from 'react';
import { Text, View } from 'react-native';
import bottomnavigation from './bottomNavigate';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hola Mundo</Text>
      <bottomnavigation />
    </View>
  );
}

export default HomeScreen;