import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { ImageSection, TitleSection, TextSection, BackButton } from '../../components'
import Header from '../../components/Header'

const selectedArticle = {
    "source": {
        "id": "spiegel-online",
        "name": "Spiegel Online"
    },
    "author": "SPIEGEL ONLINE",
    "title": "USA: Kongress nimmt Wettbewerb bei Technologiefirmen ins Visier - SPIEGEL ONLINE",
    "description": "Missbrauchen große Tech-Firmen ihre Macht? Das will der US-Kongress nun offiziell untersuchen lassen. Zudem ermitteln Behörden offenbar unter anderem gegen Facebook und Google - die Aktien geben deutlich nach.",
    "url": "https://www.spiegel.de/netzwelt/netzpolitik/usa-kongress-nimmt-wettbewerb-bei-technologiefirmen-ins-visier-a-1270672.html",
    "urlToImage": "https://cdn1.spiegel.de/images/image-1434854-860_poster_16x9-glwe-1434854.jpg",
    "publishedAt": "2019-06-04T01:11:50Z",
    "content": "Dienstag, 04.06.2019  \r\n03:11 Uhr\r\nDer US-Kongress will herausfinden, ob große Technologiefirmen ihre Monopolstellungen ausnutzen oder wettbewerbsfeindliche Maßnahmen ergriffen haben: Dafür solle eine umfassende Untersuchung eingeleitet werden, sagte der demo… [+2136 chars]"
}

const data = {
    "url": "https:\/\/www.nytimes.com\/2019\/06\/27\/us\/pregnant-woman-shot-marshae-jones.html",
    "adx_keywords": "Pregnancy and Childbirth;Murders, Attempted Murders and Homicides;Jones, Marshae;Jemison, Ebony;Alabama;Abortion;Women and Girls;Women's Rights;Jefferson County (Ala);Law and Legislation;Race and Ethnicity",
    "column": null,
    "section": "U.S.",
    "byline": "By SARAH MERVOSH",
    "type": "Article",
    "title": "Alabama Woman Who Was Shot While Pregnant Is Charged in Fetus\u2019s Death",
    "abstract": "Marshae Jones was five months pregnant when she was shot in the stomach. The police say she initiated a fight that led to the shooting.",
    "published_date": "2019-06-27",
    "source": "The New York Times",
    "id": 100000006583103,
    "asset_id": 100000006583103,
    "views": 1,
    "des_facet": [
        "PREGNANCY AND CHILDBIRTH",
        "MURDERS, ATTEMPTED MURDERS AND HOMICIDES",
        "WOMEN AND GIRLS",
        "WOMEN'S RIGHTS",
        "LAW AND LEGISLATION",
        "RACE AND ETHNICITY"
    ],
    "org_facet": [
        "ABORTION"
    ],
    "per_facet": [
        "JONES, MARSHAE",
        "JEMISON, EBONY"
    ],
    "geo_facet": [
        "ALABAMA",
        "JEFFERSON COUNTY (ALA)"
    ],
    "media": [
        {
            "type": "image",
            "subtype": "photo",
            "caption": "Marshae Jones",
            "copyright": "Jefferson County Jail",
            "approved_for_syndication": 1,
            "media-metadata": [
                {
                    "url": "https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-square320.jpg",
                    "format": "square320",
                    "height": 320,
                    "width": 320
                },
                {
                    "url": "https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75
                },
                {
                    "url": "https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/4193802805fd4e0abe4037abb9811ce0-articleInline.jpg",
                    "format": "Normal",
                    "height": 238,
                    "width": 190
                },
                {
                    "url": "https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-sfSpan.jpg",
                    "format": "Large",
                    "height": 263,
                    "width": 395
                },
                {
                    "url": "https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/4193802805fd4e0abe4037abb9811ce0-jumbo.jpg",
                    "format": "Jumbo",
                    "height": 926,
                    "width": 740
                },
                {
                    "url": "https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/4193802805fd4e0abe4037abb9811ce0-superJumbo.jpg",
                    "format": "superJumbo",
                    "height": 926,
                    "width": 740
                },
                {
                    "url": "https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-square640.jpg",
                    "format": "square640",
                    "height": 640,
                    "width": 640
                },
                {
                    "url": "https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-thumbLarge.jpg",
                    "format": "Large Thumbnail",
                    "height": 150,
                    "width": 150
                },
                {
                    "url": "https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210
                },
                {
                    "url": "https:\/\/static01.nyt.com\/images\/2019\/06\/27\/multimedia\/27xp-alabama1\/27xp-alabama1-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440
                }
            ]
        }
    ]
}
class DetailsPage extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'Details Page'),
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: '#272927',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20
            },
        }
    };

    onPress=()=>{
        console.log('Back')
        this.props.navigation.goBack()
    }

    render() {
        // const { selectedArticle } = this.props
        const { author, content, publishedAt } = selectedArticle
        const {title,abstract,published_date,byline,source,media,url}= data
        const urlToImage=media[0]['media-metadata'].filter(item=>item.format==='Normal')[0].url
        console.log('media',urlToImage)
        const date = new Date(Date.parse(publishedAt)).toLocaleDateString()
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <BackButton onPress={this.onPress}/>
                </Header>
                <View style={{ width: '70%',alignSelf: 'center',overflow:'visible',top:'8%' }}>
                    <View style={{
                        backgroundColor: '#e1e1e1',
                        marginVertical: 10,
                        width: '100%',
                        borderRadius: 10,
                        overflow: 'hidden',
                        alignSelf: 'center',
                        shadowColor: 'red',
                        shadowOffset: { width: 30, height: 30 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        elevation: 1,
                    }}>
                        <ImageSection url={urlToImage} />
                    </View>
                    <ScrollView contentContainerStyle={{ paddingBottom: 10 }} showsVerticalScrollIndicator={false}>
                        <TitleSection title={title} date={published_date} author={byline} source={source}/>
                        <TextSection content={abstract} url={url}/>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

DetailsPage.propTypes = {
    selectedArticle: PropTypes.object,
    navigation: PropTypes.object,
}

const mapStateToProps = ({ selection }) => {
    const { selectedArticle } = selection
    return { selectedArticle }
}

export default connect(mapStateToProps, null)(DetailsPage);

