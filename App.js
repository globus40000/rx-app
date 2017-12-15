import React, { Component } from 'react';
import { Alert, Button, View } from 'react-native';

export default class BasicButton extends Component {
    render() {
        return (
            <View style={{paddingTop: 40}}>
                <Button
                    onPress={() => {
                        Alert.alert('You tapped the button!');
                    }}
                    title="Press Me"
                />
            </View>
        );
    }
}
