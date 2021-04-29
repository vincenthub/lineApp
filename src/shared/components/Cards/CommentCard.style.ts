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
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 250,
    height: 120,
    backgroundColor: colors.whiteColor,
    marginLeft: 15,
    marginRight: 5,
    padding: 12,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: colors.borderColor
  },
  nameStar: {
      alignSelf: 'stretch',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
  },
  commentSection: {
      flex:1,
      alignItems: 'flex-start',
      justifyContent: 'center'
  },
  nameText: {
    fontSize: 14,
    fontWeight: '400'
  },
  ratingStars: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  commentText: {
      fontWeight: '300',
      fontSize: 12,
      color: colors.dropDownText
  }
})
