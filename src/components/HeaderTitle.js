import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

export const HeaderTitle = ({title}) => {
    return (
        <View>
            <Text style={styles.heading}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
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