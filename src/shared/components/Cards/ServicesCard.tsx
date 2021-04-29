import React from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { styles } from './ServicesCard.style';

interface ServicesCardProps {
    service: any;
    isSelected: boolean;
    onServicePress: any;
    isForDisplay: boolean;
}

export const ServicesCard: React.FC<ServicesCardProps> = ({
    service,
    isSelected,
    onServicePress,
    isForDisplay
}) => {
        return (
            <TouchableWithoutFeedback onPress={() => !isForDisplay? onServicePress(service) : {} }>
                <View style={!isForDisplay && isSelected? styles.selectedContainer : styles.container}>
                    <Text style={ !isForDisplay && isSelected? styles.selectedServiceText : styles.serviceText}>{service.serviceName}</Text>
                </View>
            </TouchableWithoutFeedback>
         
        );
}