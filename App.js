import React from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.btn}>
                <Button
                    title="Learn More"
                    onPress={onPressLearnMore}
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    //disabled={true}
                />
            </View>
        )
    }
}

function onPressLearnMore() {
    console.log('---- onPressLearnMore()');
    Alert.alert('You tapped the button!');
}

const styles = StyleSheet.create({
    btn: {
        padding: 50
    }
});
