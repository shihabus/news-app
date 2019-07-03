import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchNews, selectedArticle } from './store'
import { NewsCard, Error, CustomStatusBar } from '../../components'
import SearchBar from '../../components/SearchBar'
import Header from '../../components/Header'
import Loader from '../../components/Loader'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articleArray: []
        }
    }
   
    componentDidMount() {
        const { fetchNews } = this.props
        fetchNews()
    }

    selectionHandler = (item) => {
        const { selectedArticle, navigation } = this.props;
        selectedArticle(item)
        navigation.navigate('Details', { title: item.title })
    }


    renderSuspense = () => {
        const { error, loading, articleArray } = this.props;
        if (error) {
            return <Error />
        }
        else if (loading) {
            return <Loader />
        }
        return (
            <View style={{ flex: 1 }} >
                <NewsCard article={articleArray} handleSelection={this.selectionHandler} />
            </View>
        )
    }


    render() {
        return (
            <View style={styles.container}>
                {this.renderSuspense()}
            </View>
        )
    }

}

HomePage.propTypes = {
    fetchNews: PropTypes.func,
    navigation: PropTypes.object,
    articleArray: PropTypes.array,
    error: PropTypes.bool,
    loading: PropTypes.bool,
    success: PropTypes.bool,
}

const mapStateToProps = ({ articles }) => {
    const { loading, articleArray, error, success } = articles
    return { loading, articleArray, error, success }
}


export default connect(mapStateToProps, { fetchNews, selectedArticle })(HomePage)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    }
})