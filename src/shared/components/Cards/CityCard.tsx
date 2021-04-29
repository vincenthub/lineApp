import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'


import { styles } from './CityCard.style';
import { colors } from '@lineapp-themes/Colors';

interface CityCardProps {
    cityItem: any;
    isSelected: boolean;
    onCityPress: any;
}

export const CityCard: React.FC<CityCardProps> = ({
    cityItem,
    isSelected,
    onCityPress
}) => {
        return (
            <TouchableOpacity onPress={() => onCityPress(cityItem)}>
                <View style={styles.container}>
                    <View style={styles.cityIcon}>
                        <MaterialIcons name="location-city" size={24} color={colors.dropDownText} />
                    </View>
                    <View style={styles.cityContainer}>
                        <Text style={styles.cityNameText}>{cityItem.cityName}</Text>
                        <Text style={styles.clincsText}>{cityItem.clinics} Clinics</Text>
                    </View>
                    <View style={styles.cityCheckIcon}>
                        {isSelected? <AntDesign name="checkcircle" size={24} color={colors.dropDownText} /> : null }
                    </View>
                </View>
            </TouchableOpacity>
        );
}