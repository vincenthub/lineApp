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
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: 85,
    height: 112,
    backgroundColor: colors.whiteColor,
    borderRadius: 10,
    paddingHorizontal: 5,
    marginRight: 20,
    shadowOffset: {
      width: 0,
        height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 3,
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },

  iconText: {
    fontSize: 9,
    fontWeight: '400',
    textAlign: 'left',
    color: colors.blackColor,
 
  },
  catNameContainer: {
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  catNameText: {
    fontSize: 12,
    paddingHorizontal: 2,
    fontWeight: '400',
    textAlign: 'center',
    color: colors.whiteColor,
  },
  catDoctorsContianer: {
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  docNumbers: {
    fontSize: 10,
    fontWeight: '300',
    textAlign: 'left',
    color: colors.whiteColor,
  }
})
