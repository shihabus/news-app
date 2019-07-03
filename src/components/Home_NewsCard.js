import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../components/Header'
export const NewsCard = ({ article, handleSelection }) => {

    renderSeparator = () => (<View style={styles.itemLineSeparator} />)

    renderHeader = () => (
        <View>
            <Text style={styles.headerText}>Your Daily Read</Text>
            <View style={styles.headerLineSeparator} />
        </View>
    )

    renderItem = news => {
        const { item } = news
        return (
            <TouchableOpacity
                key={news.index.toString()}
                style={styles.cardContainer}
                onPress={() => handleSelection(item)}>
                <ImageBackground
                    source={{ uri: `${item.urlToImage}` }}
                    style={styles.imageStyle}>
                    <View style={styles.textContainer}>
                        <Text
                            numberOfLines={2}
                            ellipsizeMode='tail'
                            style={styles.titleText}>{item.title}</Text>
                    </View> 
                </ImageBackground>
            </TouchableOpacity >
        )
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center',flexDirection: 'column',backgroundColor: '#e1e1e1', }}>
            <Header/>
            <View style={{ width:'100%',overflow:'visible',top:'13%',alignSelf: 'center', }}>
                    <FlatList
                        data={article}
                        ItemSeparatorComponent={renderSeparator}
                        keyExtractor={news => (news.index)}
                        centerContent
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ backgroundColor: 'transparent',paddingBottom: 80, }}
                        renderItem={news => this.renderItem(news)} />
            </View>
        </View>
    )
}

NewsCard.propTypes = {
    article: PropTypes.array,
    handleSelection: PropTypes.func
}


const styles = StyleSheet.create({

    listHeaderText: {
        color: 'green'
    },
    cardContainer: {
        backgroundColor: '#e1e1e1',
        marginVertical: 10,
        width: '70%',
        borderRadius: 10,
        overflow: 'hidden',
        alignSelf: 'center',
        shadowColor: 'red',
        shadowOffset: { width: 30, height: 30 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    textContainer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'hsla(0, 0%, 0%, 0.5)',
        width:'100%',
        height:'35%',
        paddingHorizontal:15,
        justifyContent:'center'
    },
    titleText: {
        fontFamily: "ProximaNova",
        fontSize: 12,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 13.3,
        letterSpacing: 0,
        textAlign: "left",
        color: "#ffffff",
    },
   
    imageContainer: {
        justifyContent: 'center',
        width: '100%',
    },
    imageStyle: {
        height: 150,
        width: undefined,
        borderRadius: 10
    },
   
})

