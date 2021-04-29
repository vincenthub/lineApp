import { StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '@lineapp-themes/Colors'
import { Text } from 'native-base';

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
    alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    height: 120,
    backgroundColor: colors.transparent,
    shadowOffset: {
      width: 0,
        height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: .50,
    elevation: 1,
  },
  iconContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    marginVertical: 6,
    backgroundColor: colors.whiteColor,
    borderWidth: 0.5,
    borderRightWidth: 0,
    borderColor: colors.ovalColor,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  contentView: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    paddingLeft: 4,
    backgroundColor: colors.whiteColor,
    marginVertical: 6,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderLeftWidth: 0,
    borderWidth: 0.5,
    borderColor: colors.ovalColor,
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  rightContainer: {
    width: 110,
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: 12,
  },
  cdView: {
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  cName: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'left',
    color: colors.blackColor,
    shadowColor: colors.blackColor,
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 3,
  },
  cAddress: {
    fontSize: 11,
    fontWeight: '300',
    marginVertical: 4,
    textAlign: 'left',
    color: colors.darkGrayColor
  },
  cStatusOpen: {
    fontSize: 16,
    color: colors.dropDownText,
    fontWeight: '400',
    shadowColor: colors.mediumColor,
    shadowOffset: {
      width: 0,
        height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 3,
  },
  cStatusClose: {
    fontSize: 18,
    color: colors.disableColor,
    fontWeight: '400'
  },
  cComment: {
    marginTop: 12,
    fontSize: 11,
    color: colors.blackColor,
    fontWeight: '400'
  },
  cReviews: {
    fontSize: 9,
    color: colors.darkGrayColor,
    fontWeight: '300',
  },

})
