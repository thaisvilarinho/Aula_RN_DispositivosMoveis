import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Nosso componentes
import Simples from './src/componentes/Simples';
import ParImpar from './src/componentes/ParImpar';
import {Megasena, Multi } from './src/componentes/Multi'

//JSX
export default function App() {
  return (
    <View>
      <Simples texto ='Olá, tudo bem?'/>
      <ParImpar numero= '3'/>
      <Multi texto='Thais'/>
      <Megasena tamanho={1}/>
    </View>
  );
}



