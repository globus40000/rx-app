import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';

export default class App extends React.Component {

    render() {
        return (
            <View
                style={{padding: 50}}>
                <Text>Minimal Example:</Text>
                <FlatList
                    data={[{key: 'Item #1'}, {key: 'Item #2'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                    //ItemSeparatorComponent={() => <Text>----</Text>}
                    //ListEmptyComponent={() => <Text>Empty list</Text>}
                    //ListHeaderComponent={() => <Text>- header -</Text>}
                    //ListFooterComponent={() => <Text>- footer -</Text>}
                    //horizontal={true}
                    //initialNumToRender={1}
                    //inverted={true}
                    //numColumns={3}
                />
                <Text style={{marginTop: 50}}>More complex, multi-select example:</Text>
                <MultiSelectList
                    data={[{id: 1, title: 'Item #1'}, {id: 2, title: 'Item #2'}]}/>
            </View>
        )
    }
}

class MyListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        const textColor = this.props.selected ? "red" : "black";
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View>
                    <Text style={{ color: textColor }}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

class MultiSelectList extends React.PureComponent {
    state = {selected: (new Map(): Map<string, boolean>)};

    _keyExtractor = (item, index) => item.id;

    _onPressItem = (id: string) => {
        // updater functions are preferred for transactional updates
        this.setState((state) => {
            // copy the map rather than modifying state.
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id)); // toggle
            return {selected};
        });
    };

    _renderItem = ({item}) => (
        <MyListItem
            id={item.id}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(item.id)}
            title={item.title}
        />
    );

    render() {
        return (
            <FlatList
                data={this.props.data}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}
