import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

export default styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
    },

    title: {
        fontSize: 25,
        fontWeight: '700',
        marginVertical: 15
    },

    container: {
        paddingHorizontal: 20,
        paddingTop: 10,
        maxHeight: Dimensions.get('screen').height * 0.85,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%'
    },

    listItem: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 5,
        minHeight: Dimensions.get('screen').height * 0.08,
    },

    listItemTitle: {
        fontSize: 20,
        fontWeight: '500'
    },
});