import { colors } from '@lineapp-themes/Colors';
import { View, Text } from 'native-base';
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign'

import { styles } from './AddressHeader.style';

interface AddressHeaderProps {
    pressHeader: any;
    navigation: any;
    searchOnChangeText: string;
}

export const AddressHeader: React.FC<AddressHeaderProps> = ({
    pressHeader,
    searchOnChangeText
}) => {
        return (    
            <TouchableOpacity style={styles.contianer} onPress={pressHeader}>
                <View>
                    <View>
                        <Text style={styles.locationText}>Location</Text>
                    </View>
                    <View style={styles.innerContianer}>
                        <Text style={styles.cityText}>{searchOnChangeText}</Text>
                        <View style={styles.iconStyle}>
                            <AntDesign name="caretdown" size={14} color={colors.dropDownText}/>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
}