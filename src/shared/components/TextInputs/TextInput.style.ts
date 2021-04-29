// @flow
import { StyleSheet } from 'react-native'

import { colors } from '@lineapp-themes/Colors'

export default StyleSheet.create({
  container: {
    height: 48,
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderColor: colors.inputBorderColor,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    backgroundColor: colors.transparent
  },
  error: {
    borderColor:'red',
  },
  textError: {
    color: 'red',
  },
  disabledView: {
    backgroundColor: colors.bgColor
  },
})
