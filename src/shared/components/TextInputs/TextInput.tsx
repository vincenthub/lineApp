import React from 'react'
import { TextInput as RNTextInput, View } from 'react-native'

import { TextInputProps } from './TextInput.type'
import styles from './TextInput.style'

export const TextInput = (props: TextInputProps): ReactElement => {
  const { error, infoOnPress }= props
  return (
    <View style={[styles.container, error ? styles.error : {}]}>
      <RNTextInput
        style={styles.input}
        underlineColorAndroid={'rgba(0,0,0,0)'}
        // maxLength={isMobileNumber ? 10 : 255}
        returnKeyType={'next'}
        { ...props }
      />
    </View>
  )
}
