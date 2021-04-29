import { Text, View } from 'native-base';
import React from 'react'
import { styles } from './TimeSlotCard.style';

interface TimeSlotCardProps {
    timeSlot: string;
}

export const TimeSlotCard: React.FC<TimeSlotCardProps> = ({
    timeSlot
}) => {
        return (
            <View style={styles.container}>
                <Text style={styles.serviceText}>{timeSlot}</Text>
            </View>
        );
}