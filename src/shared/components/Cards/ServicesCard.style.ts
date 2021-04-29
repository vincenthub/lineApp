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
    height: 45,
    backgroundColor: colors.whiteColor,
    marginLeft: 10,
    marginRight: 5,
    padding: 12,
    borderRadius: 12,
    borderWidth: 0.7,
    borderColor: colors.borderColor
  },
  selectedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    backgroundColor: colors.dropDownText,
    marginLeft: 10,
    marginRight: 5,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borderColor
  },
  serviceText: {
    fontSize: 12,
    fontWeight: '500',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 3,
  },
  selectedServiceText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.whiteColor,
    shadowOffset: {
        width: 0,
          height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 3,
  }

})
