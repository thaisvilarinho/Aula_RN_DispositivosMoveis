import React from 'react';
import Padrao from '../styles/Padrao';
import { View, Text } from 'react-native';

import Condicao from './Condicao'

function parOuImpar(numero){
    let resultado = (numero % 2 === 0 )? '0Par' : '1Ímpar';
    return <Text>{resultado}</Text>
}

/*
export default props => {
    // props.numero for par: "É par"
    // props.numero for ímpar: "É ímpar"
    return <View>
        {
            parOuImpar(props.numero)
        }
        
    </View>

}*/

export default props => {
    return <View>
        <Condicao teste ={props.numero % 2 === 0}>
            <Text>É par</Text>
        </Condicao>
        <Condicao teste ={props.numero % 2 !== 0}>
            <Text>É ímpar</Text>
        </Condicao>
    </View>
} 