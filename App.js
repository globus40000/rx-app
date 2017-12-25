import React from 'react';
import { Platform, StyleSheet, Text, Image, View } from 'react-native';

console.log(Platform.Version);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Image source={require('./img/react-logo.png')} style={styles.image}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
    ...Platform.select({
        ios: {
            justifyContent: 'center'
        },
        android: {
            justifyContent: 'flex-start'
        }
    })
  },
  image: {
      width: 300,
      height: 300
  }
});
