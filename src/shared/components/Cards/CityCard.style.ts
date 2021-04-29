import { StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '@lineapp-themes/Colors'

type Style = {
  container: ViewStyle;
  iconViewContainer: ViewStyle;
  bodyViewContainer: ViewStyle;
  rightViewContainer: ViewStyle;
}

const ctextColors = {
  light: colors.whiteColor,
  dark: colors.primaryTextColor,
  mediumDark: colors.darkGrayColor
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    height: 85,
    backgroundColor: colors.whiteColor,
  },
  cityIcon: {
      width: 50,
      height: 50,
      backgroundColor: colors.primaryColor,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
  },
  cityContainer: {
      flex:1,
      alignSelf: 'stretch',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginHorizontal: 20,
  },
  cityNameText: {
      fontSize: 16,
      fontWeight: '500',
      marginVertical: 4,
      color: colors.dropDownText
  },
  clincsText: {
      fontSize: 13,
      fontWeight: '500',
      color: colors.secondaryTextColor
  },
  cityCheckIcon: {
    alignSelf: 'center',
    justifyContent:'center',
    alignItems: 'center'
  }
})
