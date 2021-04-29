import { MyBookingsListing } from '@lineapp-components/CustomListing/MyBookingsListing';
import { logInfo } from '@lineapp-components/Logger/Logger';
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BookingTabBar, Tab } from './BookingTabBar';

import { BookingParams } from 'BookingModuleTypes'

import { styles } from './MyBooking.styles'

const BOOKINGS = [
    {
        id: 'bd7a2ea-c1b1-422-aed5-3ad53ab11228ba',
        bookDateSchedule: '20',
        bookMonthSchedule: 'December, Wednesday',  
        bookTimeSchedule: '1pm - 2pm',
        bookClinicAddress: '2nd floor ZDS Multilaboratory Virata Building,Rizal Avenue 7016 Pagadian City, Philippines',
        bookClinicName: 'Eyah Dental Clinic',
        bookDoctor: 'Dr. Ia Shane',
        bookPayment: '350',
        bookingNumer: '01F2434',
        bookingService: 'Teeth Whitening',
        status: 231
    },
    {
        id: 'bd7a2ea-c1b1-42442-aed5-3ad53ab11228ba',
        bookDateSchedule: '16',
        bookMonthSchedule: 'January, Wednesday',
        bookTimeSchedule: '3pm - 4pm',
        bookClinicAddress: '2nd floor ZDS Multilaboratory Virata Building,Rizal Avenue 7016 Pagadian City, Philippines',
        bookClinicName: 'Eyah Dental Clinic',
        bookDoctor: 'Dr. Ia Shane',
        bookPayment: '3,000',
        bookingNumer: '01F634',
        bookingService: 'Retainer',
        status: 231
    },
    {
        id: 'bd7a2ea-c1b1-422-ad1d5-3ad53ab112124ba',
        bookDateSchedule: '23',
        bookMonthSchedule: 'April, Wednesday',
        bookTimeSchedule: '1pm - 2pm',
        bookClinicAddress: '2nd floor ZDS Multilaboratory Virata Building,Rizal Avenue 7016 Pagadian City, Philippines',
        bookClinicName: 'Eyah Dental Clinic',
        bookDoctor: 'Dr. Ia Shane',
        bookPayment: '350',
        bookingNumer: '01F294',
        bookingService: 'Braces Adjustment',
        status: 232
    },
    {
        id: 'bd7a2ea-c1b1-422-aed5-3ad2ab11228ba',
        bookDateSchedule: '22',
        bookMonthSchedule: 'June, Wednesday',
        bookTimeSchedule: '4pm - 5pm',
        bookClinicAddress: '2nd floor ZDS Multilaboratory Virata Building,Rizal Avenue 7016 Pagadian City, Philippines',
        bookClinicName: 'Eyah Dental Clinic',
        bookDoctor: 'Dr. Ia Shane',
        bookPayment: '350',
        bookingNumer: '01F534',
        bookingService: 'Bracket Removal',
        status: 233
    },
]


interface MyBookingProps {

}

const tablist = [{ id: 231, name: 'UPCOMING' },{ id: 232, name: 'COMPLETED' },{ id: 233, name: 'CANCELLED' }]


export const MyBooking: React.FC<MyBookingProps> = ({}) => {
    const [selectedTab, setSelectedTab ] = useState<Tab>({ name: 'UPCOMING' })
    const [filteredArray, setFilteredArray ] = useState<[BookingParams] | undefined>(undefined)

    useEffect(() => {
        if(filteredArray === undefined){
            const tabIndex = 231
            let filteredBookings = BOOKINGS.filter((booking)=>{
                return booking.status === tabIndex
            })
            setFilteredArray(filteredBookings)
        }
    },[filteredArray])
    
    const onSelectedTab = (tab: any) => {
        setSelectedTab(tab)
        const tabIndex = tab.id 
        var filteredBookings = BOOKINGS.filter((booking:BookingParams)=>{
            return booking.status === tabIndex
        })
        setFilteredArray(filteredBookings)
    }

    return (
        <View style={styles.contianer}>
            <View style={styles.contentView}>
                {   
                    BOOKINGS? <MyBookingsListing listData={filteredArray} getSelectedItem ={onSelectedTab}/> :
                    <Text style={styles.noBookings}>NO <Text style={styles.textTabTitle}>{selectedTab?.name}</Text> BOOKINGS</Text>
                } 
            </View>
            <BookingTabBar tabs={tablist} onSetSelectedTab ={onSelectedTab}/>
        </View>
    );
}