import React from 'react';
import {View, Text, Button} from 'react-native';

import {styles} from './OneStyle';

export class One extends React.Component {
    constructor(props){
        super(props);
        this.state = {"title" : "Thee Hulkkk"};
    }

    render() {
        return (
            <View style={[styles.constainer, styles.bgfy]}>
                <Text style={styles.textify}>{this.state.title}</Text>
                <Text style={styles.textify}>Hey buddyyy</Text>
            </View>
        );
    }
}