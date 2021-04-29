import { colors } from '@lineapp-themes/Colors';
import React from 'react'
import { View, Text, TouchableWithoutFeedback} from 'react-native';

import { styles } from './BookingsCard.style'

interface BookingsCardProps {
    bookingItem: any;
    isSelected: boolean;
    onBookingPress: any;
}
export const BookingsCard: React.FC<BookingsCardProps> = ({
    bookingItem,
    isSelected,
    onBookingPress
}) => {

        const bgColor = (status:number) => {
            if(status === 231) return colors.whiteColor
            if(status === 232) return colors.greenColor
            if(status === 233) return colors.redColor
        }

        const bookNumberColor = (status:number) => {
            if(status === 231) return colors.blackColor
            if(status === 232) return colors.greenColor
            if(status === 233) return colors.redColor
        }

        const primaryTextColor = (status: number) => {
            if(status === 231) return colors.blackColor
            if(status === 232) return colors.whiteColor
            if(status === 233) return colors.whiteColor
        }

        const secondaryTextColor = (status: number) => {
            if(status === 231) return colors.secondaryTextColor
            if(status === 232) return colors.whiteColor
            if(status === 233) return colors.whiteColor
        }

        const borderColor = (status: number) => {
            if(status === 231) return colors.borderColor
            if(status === 232) return colors.whiteColor
            if(status === 233) return colors.whiteColor
        }

        const textDecoration = (status: number) => {
            if(status === 231) return 'none'
            if(status === 232) return 'none'
            if(status === 233) return 'line-through'
        }

        return (
            <TouchableWithoutFeedback onPress={onBookingPress}>
                <View style={[styles.container,{backgroundColor:bgColor(bookingItem.status)}]}>
                    <View style={styles.datePriceContainer}>
                        <View style={styles.dayMonthView}>
                            <Text style={[styles.dayText, {color:primaryTextColor(bookingItem.status)}]}>{bookingItem.bookDateSchedule}</Text>
                            <Text style={[styles.monthText,{color:secondaryTextColor(bookingItem.status)}] }>{bookingItem.bookMonthSchedule}</Text>
                        </View>
                        <View style={[styles.priceView,{borderColor: borderColor(bookingItem.status)}]}>
                            <Text style={[styles.priceText,{color:primaryTextColor(bookingItem.status)}]}>P {bookingItem.bookPayment}</Text>
                        </View>
                    </View>
                    <View style={styles.clinicView}>
                        <View style={styles.clinicInfo}>
                            <Text style={[styles.clinicNameText,{color:primaryTextColor(bookingItem.status)}] }>{bookingItem.bookClinicName}</Text>
                            <Text style={[styles.clinicInfoText,{color:secondaryTextColor(bookingItem.status)}] }>{bookingItem.bookDoctor}</Text>
                            <Text style={[styles.clinicInfoText,{color:secondaryTextColor(bookingItem.status)}] }>{bookingItem.bookTimeSchedule} - {bookingItem.bookingService}</Text>
                            <Text style={[styles.clinicInfoAddressText,{color:secondaryTextColor(bookingItem.status)}] }>{bookingItem.bookClinicAddress}</Text>
                        </View>
                        <View style={styles.clinicBookNumber}>
                            <Text style={styles.clinicBookNumStaticText }>Booking Number</Text>
                            <Text style={[styles.clinicBookNumText, {textDecorationLine:textDecoration(bookingItem.status), color:bookNumberColor(bookingItem.status)}]}>{bookingItem.bookingNumer}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
}