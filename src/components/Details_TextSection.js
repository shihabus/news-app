import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import PropTypes from 'prop-types';

export const TextSection = ({ content,url }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.content}>{content}</Text>
            <Text style={styles.link} onPress={() => Linking.openURL(url)}>Read more...</Text>
        </View>
    )
}

TextSection.propTypes = {
    content: PropTypes.string,
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        // paddingHorizontal: 10
    },
    content: {
        fontFamily: "ProximaNova",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: 'justify',
        color: "#78849e"
    },
    link:{
        paddingTop: 2,
        alignSelf: 'flex-end',
        color:'blue',
    }
})