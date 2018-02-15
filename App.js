import React, { Component } from 'react';
import { View, Picker } from 'react-native';

export default class MyComponent extends Component {

    state = {
        language: 'js',
    };

    render() {
        return (
            <View style={{padding: 50}}>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
                    mode="dropdown"
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        );
    }
}
