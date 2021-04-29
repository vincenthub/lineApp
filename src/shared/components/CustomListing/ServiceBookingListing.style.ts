import { Dimensions, StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '@lineapp-themes/Colors'

const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingRight: 5,
    borderRadius: 10,
    height: 65,
  },
  flatlist: {
    backgroundColor: colors.transparent,
  }
})
