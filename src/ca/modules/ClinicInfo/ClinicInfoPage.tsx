import React, { useState } from 'react'
import { Text, View, FlatList, Modal, TouchableWithoutFeedback } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CalendarStrip from 'react-native-calendar-strip';
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'

import { ServicesCard } from '@lineapp-components/Cards/ServicesCard';
import { TimeSlotCard } from '@lineapp-components/Cards/TimeSlotCard';
import { CommentCard } from '@lineapp-components/Cards/CommentCard'
import { styles } from './ClinicInfoPage.styles';
import { Button } from '@lineapp-components/Buttons/Button';
import { t } from '@lineapp-utils/localize';
import { colors } from '@lineapp-themes/Colors';
import { ServiceBookingListing } from '@lineapp-components/CustomListing/ServiceBookingListing';
import { logInfo } from '@lineapp-components/Logger/Logger';
import { AuthNavParmProps } from '@lineapp-ca-navigations/Auth.types';
import { connect } from 'react-redux';


const SERVICESDATA= [
    {
        id: 'bd7acbea-c1b1-46ew-aed5-3ad53abb11221a',
        serviceName: 'Teeth Whitening'
    },
    {
        id: 'bd7acbea-c1321-46ew-aed5-3ad531db2821a',
        serviceName: 'Retainer'
    },
    {
        id: 'bd7a231ea-c1b1-46ew-aed5-32353a21821a',
        serviceName: 'Bracket Removal'
    },
    {
        id: 'bd7a231ea-c1b1-46ew-aed5-3ad4231b2821a',
        serviceName: 'Consultation'
    },
    {
        id: 'bd72331ea-c1b1-46ew-aed5-3adf321kb221a',
        serviceName: 'Composite Veneers'
    },
    {
        id: 'bd7a231ea-c1b1-46ew-aed5-3ad222dx3dzfbb2821a',
        serviceName: 'Dentures'
    },
    {
        id: 'bd7a231ea-c1b1-46ew-aed5-3ad5212821a',
        serviceName: 'Braces Adjustment'
    },
]

// const SERVICETIME = [
//     {
//         id: 'bd7a2ea-c1b1-46ew-aed5-3ad53abb2821a',
//         serviceName: '09 : 00 AM'
//     },
//     {
//         id: 'bd7acbea-c1321-46ew-aed5-3ad53abb2821a',
//         serviceName: '10 : 00 AM'
//     },
//     {
//         id: 'bd7a231ea-c1b1-46ew-aed5-3ad53abb2821a',
//         serviceName: '11 : 00 AM'
//     },
//     {
//         id: 'bd7a23231ea-c1b1-46ew-aed5-3ad522d2092821a',
//         serviceName: '01 : 30 PM'
//     },
//     {
//         id: 'bd7a231ea-c1b1-46ew-aed5-3ad522d02c2821a',
//         serviceName: '02 : 30 PM'
//     },
//     {
//         id: 'bd7a2asd1ea-c1b1-46ew-aed5-3ad52fsfbb2821a',
//         serviceName: '03 : 30 PM'
//     },
//     {
//         id: 'bd7a231ea-c1b1-46ew-aed5-3ad52fsfb1121a',
//         serviceName: '04 : 30 PM'
//     },
//     {
//         id: 'bd7ssd1ea-c1b1-46ew-aed5-3ad551fsfbb2821a',
//         serviceName: '05 : 30 PM'
//     },
// ]

const COMMENTS= [
    {
        id: 'bd7acbea-c121-46ew-aed5-3ad53abb2821a',
        patientName: 'Bruno',
        ratings: 4,
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 'bd7acbea-c121-46ew-aed5-3ad5234abb2821a',
        patientName: 'Jane Anne',
        ratings: 5,
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 'bd7acbea-c121-46ew-aed5-312d53abb2821a',
        patientName: 'Patrick',
        ratings: 3,
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
]


const mapStateToProps = (state: RootState) => ({
})
    
const dispatchProps = {
}   
  
const navProps = (props: AuthNavParmProps<'ClinicInfo'>) => ({
    navigation: props.navigation,
    route: props.route
})

type ClinicInfoPageProps  = ReturnType<typeof mapStateToProps> & typeof dispatchProps & ReturnType<typeof navProps>
  

const ClinicInfoPage: React.FC<{}> = (props:ClinicInfoPageProps) => {
    
    const { navigation } = props

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Open",
            headerTitleStyle: {
                color: colors.dropDownText,
                fontSize: 22,
                fontWeight: "600",
                shadowOffset: {
                width: 0,
                    height: 1,
                },
                shadowOpacity: 0.18,
                shadowRadius: 1,
                elevation: 3
            }
        });
    }, [navigation]);

    const [readMore, setReadMore] = useState(0) 
    const [showModal, setShowModal] = useState(false);
    const [cformattedDate, setFormattedDate] = useState(null);

    // const renderTimeSlotItem = ({ item }) => (
    //     <TimeSlotCard
    //         timeSlot={item.serviceName}
    //     />
    // );

    const renderCommentItem = ({ item }) => (
        <CommentCard
            patientName={item.patientName}
            ratings={item.ratings}
            comment={item.comment}
        />
    );


    function onDateSelected(date: any) {
        setFormattedDate(date.format('YYYY-MM-DD'))
    }

    function onPressReadMore() {
        setReadMore(readMore == 4? 0 : 4)
    }

    function onShowModal(){
        setShowModal(!showModal)
    }

    function getSelectedService(item){
        logInfo('SELECTED SERVICE::', item)
    }

    return (
        <View style={styles.mainContianer}>
            <Modal
                key={"modal"}
                visible={showModal}
                transparent={true}
                animationType={"none"}
                onRequestClose={() => onShowModal()}
                statusBarTranslucent={true}
                hardwareAccelerated={true}
            >
                <View style={styles.modalTopContainer}>
                    <TouchableWithoutFeedback onPress={() => onShowModal()}>
                        <View style={styles.modalTopContainer}/>
                    </TouchableWithoutFeedback >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.bookingHeaderText}>{t('appointment.appointmentText')}</Text>
                        </View>
                        <View style={styles.cHeaderText}>
                            <Text style={styles.bookHeaderText}>SELECT SERVICE</Text>
                        </View>
                        <View style={styles.calServices}>
                            <ServiceBookingListing
                                listData={SERVICESDATA}
                                getSelectedItem={getSelectedService}
                                forDisplay={false}
                            />
                        </View>
                        <View style={styles.cHeaderText}>
                            <Text style={styles.bookHeaderText}>SELECT SCHEDULE</Text>
                        </View>
                        <View style={styles.calendarView}>
                            <CalendarStrip
                                calendarAnimation={{
                                    type: 'sequence',
                                    duration: 60,
                                }}
                                style={styles.calendar}
                                calendarColor={colors.transparent}
                                iconContainer={{flex: 0.1}}
                                dateNumberStyle={{fontSize: 14}}
                                highlightDateNumberStyle={styles.calendarDateHighlighted}
                                highlightDateNameStyle={styles.calendarDayHightlighted}
                                daySelectionAnimation={{
                                    type: 'background', 
                                    animType: '',
                                    duration: 30,
                                    animUpdateType: '',
                                    animProperty: '',
                                    animSpringDamping:'',
                                    highlightColor: colors.dropDownText
                                }}
                                onDateSelected={(date)=>onDateSelected(date)}
                            />
                        </View>
                        {/* <View style={styles.cHeaderText}>
                            <FlatList
                                style={styles.servicesList}
                                data={SERVICETIME}
                                renderItem={renderTimeSlotItem}
                                keyExtractor={item => item.id}
                                numColumns={4}
                                scrollEnabled={false}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View> */}
                        <View style={styles.appointmentModalView}>
                            <Button
                                variant={'LAPrimaryBoldTextLightButton'}
                                disabled={false}
                                left={null}
                                right={null}
                                content={<Text style={styles.appointmentButtonText}>BOOK ME NOW</Text>}
                                onPress={() => onShowModal()}
                                stretched
                            />
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.cLogoInfo}>
                <View style={styles.cLogo}/>
                <View style={styles.cInfo}>
                    <Text style={styles.cNameText}>Eyah Dental Clinic</Text>
                    <Text style={styles.cDoctorText}>Dr. Ia Shane</Text>
                    <Text style={styles.cSpecialtyText}>Dentist</Text>
                </View>
            </View>
            <ScrollView style={styles.contianer}>
                <View style={styles.cAboutInfo}>
                    <View style={styles.cHeaderView}>
                        <Text style={styles.cHeaderText}>ABOUT</Text>
                    </View>
                    <View style={styles.cCardInfo}>
                        <Text 
                            style={styles.cSubText}
                            numberOfLines={0}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <View style={styles.subInfo}>
                            <View>
                                <View style={styles.cAddress}>
                                    <View style={styles.chLeft}>
                                        <Feather name='map-pin' size={18} color={colors.dropDownText}/>
                                    </View>
                                    <View style={styles.cAddressInfo}>
                                        <Text style={styles.cHeaderText}>ADDRESS</Text>
                                        <Text style={styles.cSubText}>2nd floor ZDS Multilaboratory Virata Building,Rizal Avenue 7016 Pagadian City, Philippines</Text>
                                    </View>      
                                </View>
                                <View style={styles.cAddress}>
                                    <View style={styles.chLeft}>
                                        <Entypo name='clock' size={18} color={colors.dropDownText}/>
                                    </View>
                                    <View style={styles.cAddressInfo}>
                                        <Text style={styles.cHeaderText}>Daily Schedule</Text>
                                        <Text style={styles.cSubText}>Monday - Saturday</Text>
                                        <Text style={styles.cSubText}>Open till 5pm</Text>
                                    </View>      
                                </View>
                            </View>
                            <View style={styles.mapContainer}>
                                <View style={styles.mapInfo}></View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.cServices}>
                    <View style={styles.cHeaderView}>
                        <Text style={styles.cHeaderText}>SERVICES</Text>
                    </View>
                    <View style={styles.cCardInfo}>
                        <ServiceBookingListing
                            listData={SERVICESDATA}
                            getSelectedItem={getSelectedService}
                            forDisplay={true}
                        />
                    </View>
                </View>
                {/* <View style={styles.cSchedules}>
                    <View style={styles.cHeaderView}>
                        <Text style={styles.cHeaderText}>COMMENTS</Text>
                        <Text 
                            style={styles.readMoreText}
                            onPress={()=> console.log("View All Comments")} 
                        >
                            View All
                        </Text> 
                    </View> 
                    <FlatList
                        style={styles.commentsList}
                        data={COMMENTS}
                        renderItem={renderCommentItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View> */}
            </ScrollView>
            <View style={styles.appointmentView}>
                <Button
                    variant={'LAPrimaryBoldTextLightButton'}
                    disabled={false}
                    left={null}
                    right={null}
                    content={<Text style={styles.appointmentButtonText}>{t('appointment.appointmentText')}</Text>}
                    onPress={() => onShowModal()}
                    stretched
                />
            </View>
        </View>
    );
}

export const ClinicInfoPageReduxed = connect(
    mapStateToProps,
    dispatchProps
)(ClinicInfoPage)