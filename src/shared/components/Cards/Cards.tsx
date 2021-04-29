import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import {styles} from './Cards.style'

interface RowCardProps {
  cardIcon: any;
  cName: string;
  cAddress: string;
  cStatus: number;
  cComment: string;
  cReviews: string;
  onPressRow: any;
}

export const rowCard: React.FC<RowCardProps> = ({
  cardIcon,
  cName,
  cStatus,
  cAddress,
  cComment,
  cReviews,
  onPressRow
}) => {
  return (
    <TouchableOpacity onPress={onPressRow}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Text>{cardIcon}</Text>
        </View>
        <View style={styles.contentView}>
          <View style={styles.bodyContainer}>
            <View style={styles.cdView}>
              <Text style={styles.cName}>{cName}</Text>
              <Text style={styles.cAddress}>{cAddress}</Text>
            </View>
          </View>
          <View style={styles.rightContainer}>
              {cStatus === 1 ? 
                <Text style={styles.cStatusOpen}>Open</Text>  
                : <Text style={styles.cStatusClose}>Close</Text>  
              }
              <Text style={styles.cComment}>{cComment}</Text>  
              <Text style={styles.cReviews}>Based on {cReviews} reviews</Text>  
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
