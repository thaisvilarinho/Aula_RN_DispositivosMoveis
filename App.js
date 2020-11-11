import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.cabecalho}>Cabeçalho</Text>
      <Text style={styles.texto}>Conteúdo</Text>
      <Text style={styles.rodape}>Rodapé</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7159c1',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  texto: {
    color: '#fff',
    fontSize: 40,
  },

  cabecalho:{
    fontSize:16,
    color:'red',
  },
  
  rodape:{
    fontSize: 30,
    color: 'gray',
  },

})


