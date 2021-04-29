import React from 'react'
import { View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'


import { styles } from './RowIconCard.style';
import { colors } from '@lineapp-themes/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface RowIconCardProps {
    rowName: string;
    iconName: string;
    iconColor: string;
    textSize: number;
    onPress: any;
    setDisabled: boolean;
    withBorder: boolean;
}

export const RowIconCard: React.FC<RowIconCardProps> = ({
    rowName,
    iconName,
    iconColor,
    textSize,
    onPress,
    setDisabled,
    withBorder
}) => {
        return (
            <TouchableOpacity onPress={onPress} disabled={setDisabled}>
                 <View style={[
                     styles.container,
                        {
                            borderBottomColor: withBorder? colors.borderColor : colors.transparent,
                            borderBottomWidth: withBorder? 0.5 : 0
                        } 
                    ]}
                >
                    <View style={styles.rowIcon}>
                        <AntDesign name={iconName} size={22} color={iconColor} />
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={[styles.rowNameText, {color:iconColor, fontSize: textSize}]}>{rowName}</Text>
                    </View>
                </View>
            </TouchableOpacity>
           
        );
}