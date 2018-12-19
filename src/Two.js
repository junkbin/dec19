import React from 'react';
import {View, Text, Button} from 'react-native';

import {styles} from './TwoStyle';

export class Two extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={[styles.container, styles.bgfy]}>
                <Text style={styles.textify}>Hey buddyyy!!</Text>
            </View>
        );
    }
}