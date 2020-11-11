import React from 'react';
import { View } from 'react-native';

// Nosso componentes
import Simples from './src/componentes/Simples';
import ParImpar from './src/componentes/ParImpar';
import { Multi } from './src/componentes/Multi'
import { Megasena } from './src/componentes/Megasena'

//JSX
export default function App() {
  return (
    <View>
      <Simples texto ='Olá, tudo bem?'/>
      <ParImpar numero= '2'/>
      <Multi texto='Thaís'/>
      <Megasena tamanho={5}/>
    </View>
  );
}



