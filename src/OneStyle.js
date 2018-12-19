import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    constainer : {
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center'
    },

    bgfy : {
        backgroundColor : Platform.OS === 'ios' ? 'tomato' : 'royalblue'
    },

    textify : {
        color : 'ghostwhite',
        fontSize : 40,
        fontFamily : Platform.OS == 'ios' ? 'Helvetica' : 'cursive'
    }
});

export {styles};