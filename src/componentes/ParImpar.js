import React from 'react';
import Padrao from '../styles/Padrao';
import { View, Text } from 'react-native';

export default props => {
    // props.numero for par: "É par"
    // props.numero for ímpar: "É ímpar"
    return <View>
        {
            props.numero % 2 === 0 ?
            <Text>É par</Text>:
            <Text>É ímpar</Text>
        }
        
    </View>

}