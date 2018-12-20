import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    },

    bgfy : {
        ...Platform.select({
            ios : {
                backgroundColor: 'gold'
            },

            android : {
                backgroundColor : 'royalblue'
            }
        })
    },

    textify : {
        ...Platform.select({
            'ios': {
                color : 'green',
                fontSize : 30,
                fontFamily : "helvetica",
                fontStyle: 'italic'

            },
            'android' : {
                color : 'ghostwhite',
                fontSize : 30,
                fontFamily : 'cursive'
            }
        })
    }
});

export {styles}