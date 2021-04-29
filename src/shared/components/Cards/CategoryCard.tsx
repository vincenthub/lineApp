import { View, Text } from 'native-base';
import React from 'react'
import { styles } from './CategoryCard.style';

interface CategoryCardProps {
    catIcon: any;
    catName: string;
    color: string;
    doctors: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
    catIcon,
    catName,
    color,
    doctors
  }) => {
        return (
            <View style={[styles.container,{backgroundColor: color}]}>
                <View style={styles.iconContainer}>
                    <Text style={styles.iconText}>{catIcon}</Text>
                </View>
                <View style={styles.catNameContainer}>
                    <Text style={styles.catNameText}>{catName}</Text>
                </View>
                <View style={styles.catDoctorsContianer}>
                    <Text style={styles.docNumbers}>{doctors} Clinics</Text>
                </View>
            </View>
        );
}