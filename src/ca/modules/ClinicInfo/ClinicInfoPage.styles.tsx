import { colors } from '@lineapp-themes/Colors';
import {
    StyleSheet, Platform, Dimensions
} from 'react-native';
  
const {width, height}= Dimensions.get('window')

export const styles = StyleSheet.create({
    mainContianer: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: colors.whiteColor
    },
    contianer: {
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: colors.whiteColor,
        paddingTop: 10,
        paddingHorizontal: 10,
    },

    cLogoInfo: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        
    },
    cLogo: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: colors.mediumColor,
        borderWidth: 1,
        borderColor: colors.borderColor,
        shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1,
          elevation: 0,
    },
    cInfo: {
        flex: 1,
        alignSelf: 'stretch',
        marginHorizontal: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    cNameText: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.dropDownText,
        shadowOffset: {
        width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 3
    },
    cDoctorText: {
        fontSize: 16,
        fontWeight: '400',
        marginVertical: 5,
        color: colors.blackColor
    },
    cSpecialtyText: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.secondaryTextColor
    },

    cAboutInfo: {
        marginBottom: 20,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    aboutHeader: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    readMoreText: {
        fontSize:12,
        fontWeight: '400'
    },
    cHeaderView: {
        marginVertical: 10,
        marginHorizontal: 10,
        alignSelf: 'stretch',
        backgroundColor: colors.whiteColor,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        alignContent: 'center',
    },

    chRight: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    
    chLeft: {
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginRight: 10,
    },
    subInfo: {
        alignSelf: 'stretch',
        flexDirection: 'row'
    },
    mapContainer: {
        flex:1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    mapInfo: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: colors.mediumColor,
        borderRadius: 10,
    },
    cAddress: {
        marginTop: 20,
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },

    cHeaderText: {
        alignSelf: 'stretch',
        fontSize: 14,
        fontWeight: '500',
        color: colors.dropDownText,
        shadowOffset: {
            width: 0,
              height: 1,
          },
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 3, 
    },

    cCardInfo: {
        backgroundColor: colors.whiteColor,
        paddingHorizontal: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cAddressInfo: {
        width: width/2,
    },
    cSubText: {
        marginTop:5,
        fontSize: 12,
        fontWeight: '400',
        color: colors.secondaryTextColor
    },

    cServices: {
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    servicesList: {
        marginVertical: 10,
        height: 40,
        backgroundColor: colors.transparent
    },

    cSchedules: {
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },

    commentsList: {
        marginVertical: 10,
        marginHorizontal: 5,
        height: 120,
        backgroundColor: colors.transparent
    },

    appointmentView: {
        alignSelf: 'stretch',
        paddingBottom: 25,
        paddingTop: 10,
        paddingHorizontal: 20,
        borderTopColor: colors.borderColor,
        borderTopWidth: 0.5
    },

    appointmentModalView: {
        alignSelf: 'stretch',
        paddingBottom: 25,
        paddingTop: 10,
        paddingHorizontal: 20,
    },

    appointmentButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.whiteColor
    },

    modalTopContainer: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalContainer: {
        flex:1,
        position:'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        backgroundColor: colors.whiteColor,
        height: 420,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
      },
    modalHeader: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.whiteColor,
        marginTop: 20
    },
    bookingHeaderText: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.dropDownText,
        shadowOffset: {
            width: 0,
              height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1,
          elevation: 3,
    },
    bookHeaderText: {
        fontSize: 12,
        marginVertical: 10,
        fontWeight: '500',
        color: colors.blackColor,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 3,
    },
    calServices: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 65
    },
    calendarView: {
        marginVertical: 10,
        alignSelf: 'stretch',
        height: 111,
        borderRadius: 10
    },
    calendar: {
        height:110, 
        paddingBottom: 10,
        borderRadius: 10
    },
    calendarDateHighlighted: {
        textAlign: 'center',
        fontSize: 14, 
        fontWeight: 'bold', 
        color: colors.whiteColor,
    },
    calendarDayHightlighted: {
        fontSize: 10, 
        fontWeight: 'bold',
        color: colors.whiteColor,
    }
  });
  
  