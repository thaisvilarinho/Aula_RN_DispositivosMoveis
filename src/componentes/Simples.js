import React from 'react';
import { Text } from 'react-native';

/* Esse seria o jeito antigo sem o arrow function
ela tem alguns problemas, por isso é aconselhável usar arrow functions
function componente (props){

}
*/
export default (props) => <Text style={{marginTop: 30}}>Texto: {props.texto}</Text>