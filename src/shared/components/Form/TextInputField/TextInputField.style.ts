// @flow

import { StyleSheet } from 'react-native'
import { colors } from '@lineapp-themes/Colors'

export default StyleSheet.create({
  container: {
    marginBottom: 14
  },
  textInput: {
    alignSelf: 'stretch',
    flex: 1,
    fontSize: 12,
    color: colors.primaryTextColor,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.primaryTextColor,
    marginBottom: 8
  },
  labelError: {
    color: colors.redColor,
    paddingVertical: 8,
    fontSize: 12,
    fontWeight: 'bold',
  },
  inputContainer: {
    paddingVertical: 10,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: colors.inputBorderColor,
    fontSize: 14,
  },
  inputContainerError: {
    borderColor: 'red',
  },
  textError: {
    marginTop:8,
    color: 'red',
  }
})
