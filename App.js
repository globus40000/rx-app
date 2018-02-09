import React from 'react';
import {View, Text, DrawerLayoutAndroid, TextInput, Button} from 'react-native';

export default class App extends React.Component {

    render() {
        var navigationView = (
            <View style={{flex: 1, marginTop: 50}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left', color: 'white'}}>I'm in the Drawer!</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}
                /*onDrawerClose={() => alert('Drawer has been closed')}*/
                /*onDrawerOpen={() => alert('Drawer has been opened')}*/
                drawerBackgroundColor="rgba(0,0,0,0.5)"
                keyboardDismissMode="on-drag">
                <View style={{flex: 1, alignItems: 'center', marginTop: 50}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                    <TextInput
                        style={{width: 120}}
                        placeholder="You can type here"/>
                </View>
            </DrawerLayoutAndroid>
        )
    }
}
