import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

export default class Header extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        height:'35%',
        backgroundColor: '#e41274',
        width:'100%',
        position: 'absolute',
        top:0,
        padding: '5%',
    },
})
