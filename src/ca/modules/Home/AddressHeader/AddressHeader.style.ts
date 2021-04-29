import { colors } from '@lineapp-themes/Colors';
import {
    StyleSheet, Platform
  } from 'react-native';
  
  
  export const styles = StyleSheet.create({
    contianer: {
        marginHorizontal: 20,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContianer: {
        flexDirection: 'row'
    },
    cityText: {
        color: colors.dropDownText,
        fontSize: 16,
        fontWeight: '500',
        justifyContent: 'center',
        textAlign: 'center',
        shadowOffset: {
            width: 0,
              height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1,
          elevation: 3,
    },
    iconStyle: {
        marginLeft: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    locationText: {
        fontSize: 14,
        marginBottom: 4,
        textAlign: 'left',
        color: colors.rowBg
    }
  });
  
  