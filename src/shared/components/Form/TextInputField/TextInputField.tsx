// @flow

import * as React from 'react'
import {
  View,
  Text,
  TextInputProps,
} from 'react-native'
import { Controller } from 'react-hook-form'

import { TextInput } from '@lineapp-components/TextInputs/TextInput'

import { FormFieldProps } from '../types'
import styles from './TextInputField.style'
import { colors } from '@lineapp-themes/Colors'

export type Props = TextInputProps & FormFieldProps

export const TextInputField = (props: Props): React.ReactElement<any> => {
  const {
    control,
    name,
    rules,
    label,
    error,
    editable,
    onPressInfo,
    ...otherProps
  } = props
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={null}
      render={({ onChange, onBlur, value }): React.ReactElement => (
        <View style={styles.container}>
          <TextInput
            error={error}
            autoCapitalize='none'
            value={value}
            onBlur={onBlur}
            placeholder={label}
            placeholderTextColor={colors.secondaryTextColor}
            editable={editable}
            infoOnPress={onPressInfo}
            onChangeText={(inputValue: string): void => {
              onChange && onChange(inputValue)
            }}
            {...otherProps}
          />
          <Text style={styles.textError}>{error && error.message}</Text>
        </View>
      )}
    />
  )
}

