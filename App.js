import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Nosso componentes
import Simples from './src/componentes/Simples';
import ParImpar from './src/componentes/ParImpar';

//JSX
export default function App() {
  return (
    <View>
      <Simples texto ='Olá, tudo bem?'/>
      <ParImpar numero= '5'/>
    </View>
  );
}



