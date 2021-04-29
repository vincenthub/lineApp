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
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 85,
    backgroundColor: colors.whiteColor,
    marginRight: 10,
    marginBottom: 10,
    padding: 12,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: colors.borderColor
  },
  serviceText: {
    fontSize: 12,
    fontWeight: '400',
    shadowOffset: {
        width: 0,
          height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 3,
  }

})
