import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

export default styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
    },

    container: {
        paddingHorizontal: 20,
        paddingTop: 10,
        maxHeight: Dimensions.get('screen').height,
        backgroundColor: '#ffffff',
    },

    listItem: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        width: '100%',
        paddingVertical: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#000000',
        minHeight: Dimensions.get('screen').height * 0.08,
    },

    listItemTitle: {
        fontSize: 20,
        fontWeight: '500'
    },
    listItemSubtitle: {
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'italic',
        // marginTop: 5,
    },
});