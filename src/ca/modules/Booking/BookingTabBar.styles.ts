import { colors } from '@lineapp-themes/Colors';
import {
    StyleSheet,
    Dimensions
} from 'react-native';
  

const { width, height }= Dimensions.get('window')

export const styles = StyleSheet.create({
    mainContainer: {
        width: width,
        height: 80,
        backgroundColor: colors.transparent,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    container: {
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: colors.whiteColor,
        borderBottomWidth: 0.5
    },

    tabName: {
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'center',
        color: colors.darkGrayColor

    }
});
  
  