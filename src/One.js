import React from 'react';
import {View, Text, Button} from 'react-native';

export class One extends React.Component {
    constructor(props){
        super(props);
        this.state = {"title" : "Thee Hulkkk"};
    }

    render() {
        return (
            <View>
                <Text>{this.state.title}</Text>
                <Text>Hey buddyyy</Text>
            </View>
        );
    }
}