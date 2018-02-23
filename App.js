import React, { Component } from 'react';
import { View, ProgressBarAndroid } from 'react-native';

export default class MyComponent extends Component {

    render() {
        return (
            <View style={{padding: 100}}>
                <ProgressBarAndroid
                    styleAttr="Inverse"
                    color="blue"/>
            </View>
        );
    }
}
