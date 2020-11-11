import React from 'react';
import { Text } from 'react-native';
import Padrao from '../styles/Padrao';

export const Multi = props => {
    // props.texto = 'Thais'
    // siaht
    let txtInvertido = props.texto.split('').reverse().join('');
    return <Text style={[Padrao.txtInvertido, { fontSize: 30}]}>{txtInvertido}</Text>
}