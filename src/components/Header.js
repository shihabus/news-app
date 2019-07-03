import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Articles</Text>
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
        padding: '8%',
    },
    heading:{
        fontFamily: "ProximaNova",
        fontSize: 26.7,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 29.3,
        letterSpacing: 0,
        textAlign: "left",
        color: "#ffffff"
    }
})
