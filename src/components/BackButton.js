import React from 'react';
import { View,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export const BackButton = ({onPress}) => {
    return (
        <TouchableOpacity style={{
            alignItems:'center',
            justifyContent:'center',
            width:50,
            height:50,
            backgroundColor:'hsla(187, 100%, 52%, 0.5)',
            borderRadius:50,
            position: 'absolute',
            top:'4%',
            left:'4%'
            }}
            onPress={onPress}
            >
           <Icon name="arrow-left" size={15} color="#fff" />
        </TouchableOpacity>
    )
}
