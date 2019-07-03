import React from 'react';
import { View,StyleSheet } from 'react-native';
import Animation from 'lottie-react-native';

export default class Loader extends React.Component {
    componentDidMount() {
        this.animation.play();
    }

    render() {
        return (
            <View style={styles.container}>
                <Animation
                    ref={animation => {
                        this.animation = animation;
                    }}
                    style={{
                        width: 100,
                        height: 100
                    }}
                    loop={true}
                    source="loader.json"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})