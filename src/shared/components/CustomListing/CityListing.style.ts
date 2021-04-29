import { Dimensions, StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '@lineapp-themes/Colors'

const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignSelf: 'stretch'
  },
  flatlist: {
    flex:1,
    alignSelf: 'stretch', 
    backgroundColor: colors.transparent,
  }
})
