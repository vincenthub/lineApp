import { Dimensions, StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '@lineapp-themes/Colors'

const {width, height} = Dimensions.get('window')

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
    width: width,
    paddingVertical: 0,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignSelf: 'stretch',
    height: 50,
  },
  rowIcon: {
      width: 50,
      height: 50,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
  },
  rowContainer: {
      flex:1,
      alignSelf: 'stretch',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginHorizontal: 20,
  },
  rowNameText: {
      fontSize: 16,
      fontWeight: '600',
      marginVertical: 4,
      color: colors.redColor
  }
})
