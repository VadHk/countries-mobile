import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        borderBottomColor: '#000000',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },

    text: {
        fontSize: Dimensions.get('screen').height * 0.035,
        fontWeight: '600',
        color: '#000000'
    }
})