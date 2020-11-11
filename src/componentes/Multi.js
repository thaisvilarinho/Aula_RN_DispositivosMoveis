import React from 'react';
import { Text } from 'react-native';
import Padrao from '../styles/Padrao';

export const Multi = props => {
    // props.texto = 'Thais'
    // siaht
    let txtInvertido = props.texto.split('').reverse().join('');
    return <Text style={[Padrao.txtInvertido, { fontSize: 30}]}>{txtInvertido}</Text>
}

export const Megasena = props =>{
    //props.tamanho 
    const [min, max] = [1, 60];
    const numeros = Array(props.tamanho ||6).fill(0);

    for (let i = 0; i < numeros.length; i++){
        let novoNumero = 0;
        while (numeros.includes(novoNumero)){
            novoNumero = Math.floor(Math.random() * (max - min + 1) + min);
        }
        numeros[i] = novoNumero;
    }
    // Ordene o nosso array de forma crescente
    numeros.sort((a, b)=> a - b);
    return <Text>{numeros.join(', ')}</Text>
}