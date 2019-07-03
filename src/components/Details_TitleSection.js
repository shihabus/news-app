import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export const TitleSection = ({ title, author, date,source }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.rowContainer}>
                <Text>{source}</Text>
                <Text>{date}</Text>
            </View>
            <Text style={styles.author}>{author === null ? '--' : author}</Text>
        </View>
    )
}

TitleSection.propTypes={
    title:PropTypes.string, 
    author:PropTypes.string, 
    date:PropTypes.string
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        // paddingHorizontal: 10
    },
    title: {
        fontFamily: "ProximaNova",
        fontSize: 20,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "justify",
        color: "#454f63"
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 2
    },
    author: {
        fontFamily: "ProximaNova",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        // lineHeight: 24,
        letterSpacing: 0,
        textAlign: "left",
        color: '#000',
    },
})