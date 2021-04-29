import { colors } from '@lineapp-themes/Colors';
import {
    StyleSheet, Platform, Dimensions
} from 'react-native';
  
const {width, height}= Dimensions.get('window')

export const styles = StyleSheet.create({
    contianer: {
        flex:1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.mediumColor,
    },
    contentView: {
        flex:1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    noBookings: {
        fontSize: 12,
        fontWeight: '300'
    },
    textTabTitle: {
        fontSize: 12,
        fontWeight: '600'
    }
});
  
  