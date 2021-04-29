import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import buttonTheme from './Button.style'
import { ButtonVariant } from './Button.type'

interface ButtonProps {
  stretched?: boolean;
  variant?: ButtonVariant;
  disabled: boolean;
  left: any;
  right: any;
  content: any;
  onPress: any;
}

export const Button: React.FC<ButtonProps> = ({
  stretched,
  variant = 'default',
  disabled,
  left,
  right,
  content,
  onPress,
}) => {
  const styles = buttonTheme(variant)
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={stretched ? { alignSelf: 'stretch' }: {}}
      >
      <View style={styles.container}>
        {left && (
          <View style={{ justifyContent:'center', alignItems:'flex-start', flex: 1,alignSelf:'stretch' }}>{left}</View>
        )}
        <View>
          {content !== React.Component ? (
            <Text style={styles.textStyle}>{content}</Text>
          ) : (
            content
          )}
        </View>
        {right && (
          <View style={{ alignItems:'flex-end', flex: 1,alignSelf:'stretch', justifyContent:'center' }}>{right}</View> 
      )}
      </View>
    </TouchableOpacity>
  )
}
