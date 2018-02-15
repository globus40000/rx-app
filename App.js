import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    stretch: {
        width: 100,
        height: 200
    }
});

export default class DisplayAnImageWithStyle extends React.Component {
    render() {
        return (
            <View style={{padding: 50}}>
                <Image
                    style={styles.stretch}
                    source={require('./favicon.png')}
                />
            </View>
        );
    }
}
