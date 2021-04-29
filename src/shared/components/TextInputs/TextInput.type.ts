import { TextInputProps as RNTextInputProps } from 'react-native'

export type TextInputVariant = 'default'
export type TextInputProps = RNTextInputProps & {
  variant: TextInputVariant;
  error: string;
  infoOnPress: any;
 }
