import React from 'react';
import { Text } from 'react-native';
import Padrao from '../styles/Padrao';

/* Esse seria o jeito antigo sem o arrow function
ela tem alguns problemas, por isso é aconselhável usar arrow functions
function componente (props){

}
*/
export default (props) => <Text style={Padrao.exercicio}>Texto: {props.texto}</Text>