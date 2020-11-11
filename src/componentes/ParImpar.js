import React from 'react';
import { View, Text } from 'react-native';

function parOuImpar(numero){
    let resultado = (numero % 2 === 0 )? '0Par' : '1Ímpar';
    return <Text>{resultado}</Text>
}


export default props => {
    // props.numero for par: "É par"
    // props.numero for ímpar: "É ímpar"
    return <View>
        {
            parOuImpar(props.numero)
        }
        
    </View>

}