import { colors } from '@lineapp-themes/Colors';
import React from 'react'
import { Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { styles } from './CommentCard.style';

interface CommentCardProps {
    patientName: string;
    ratings: number;
    comment: string;
}

export const CommentCard: React.FC<CommentCardProps> = ({
    patientName,
    ratings,
    comment
}) => {
        return (
            <View style={styles.container}>
                <View style={styles.nameStar}>
                    <Text style={styles.nameText}>{patientName}</Text>
                    <View style={styles.ratingStars}>
                        <FontAwesome name="star" size={14} color={colors.dropDownText} />
                        <FontAwesome name="star" size={14} color={colors.dropDownText} />
                        <FontAwesome name="star" size={14} color={colors.dropDownText} />
                        <FontAwesome name="star" size={14} color={colors.dropDownText} />
                        <FontAwesome name="star" size={14} color={colors.dropDownText} />
                    </View>
                </View>
                <View style={styles.commentSection}>
                    <Text 
                        style={styles.commentText}
                        lineBreakMode={'tail'}
                        numberOfLines={4}
                    >
                            {comment}
                    </Text>
                </View>
            </View>
        );
}