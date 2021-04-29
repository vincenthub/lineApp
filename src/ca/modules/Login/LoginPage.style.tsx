import {
  StyleSheet, Dimensions
} from 'react-native';

import { colors } from '@lineapp-themes/Colors'

  const { width } = Dimensions.get('window');
  
  
  export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginHorizontal: 20
    },

    appName: {
      marginTop: 16,
      fontSize: 30,
      color: colors.secondaryColor,
      fontWeight: '800',
      marginVertical: 4,
      textAlign: 'center'
    },

    titleView: {
      marginTop: 20,
      marginBottom: 60
    },
    innerTitleView: {
      flexDirection: 'row'
    },
    pageTitle: {
      fontSize: 20,
      fontWeight: '500',
      marginVertical: 4,
      textAlign: 'center',
      color: colors.primaryTextColor
    },
    pageSubTitle: {
      marginTop: 20,
      fontSize: 14,
      fontWeight: '300',
      marginVertical: 4,
      textAlign: 'center',
      width: width - 100,
      
    },

    bottonView: {
      flex:1,
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      marginVertical: 20
    },

    signupView: {
      marginVertical: 30,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },

    signupSubText: {
      marginTop: 20,
      fontSize: 14,
      fontWeight: '300',
      marginVertical: 4,
      textAlign: 'center',
      width: width - 100,
      color: colors.primaryTextColor
    },
    
    errorView: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      alignSelf: 'stretch'
    },

    errorText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.redColor,
      textAlign: 'left'
    },

  })