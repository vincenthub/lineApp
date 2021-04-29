import { Dimensions, StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '@lineapp-themes/Colors'

const { width } = Dimensions.get('window')

type Style = {
  container: ViewStyle;
  iconViewContainer: ViewStyle;
  bodyViewContainer: ViewStyle;
  rightViewContainer: ViewStyle;
}

const ctextColors = {
  light: colors.whiteColor,
  dark: colors.primaryTextColor,
  mediumDark: colors.darkGrayColor
};

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        marginHorizontal: 20,
        marginVertical: 15,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        backgroundColor: colors.whiteColor,
        borderRadius: 10,
        marginRight: 20,
        shadowOffset: {
        width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 3,
    },
    datePriceContainer: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    dayMonthView: {
        marginHorizontal: 20,
    },
    dayText: {
        fontSize: 22,
        fontWeight: '500'
    },
    monthText: {
        fontSize: 12,
        fontWeight: '400',
        color: colors.secondaryColor
    },
    priceView: {
        paddingHorizontal: 20,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopWidth: 0.5,
        borderLeftWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: colors.borderColor
    },
    priceText: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.dropDownText
    },
    clinicView: {
        marginTop: 20,
        flexDirection: 'row',
    },
    clinicInfo: {
        marginHorizontal: 20,
        justifyContent: 'space-between'
    },
    clinicNameText: {
        fontSize: 14,
        fontWeight: '500'
    },
    clinicInfoText: {
        marginTop: 5,
        width: width/2,
        fontSize: 12,
        fontWeight: '400',
        color: colors.secondaryColor
    },  
    clinicInfoAddressText:{
        marginTop: 5,
        width: width/2,
        fontSize: 10,
        fontWeight: '300',
        color: colors.secondaryColor
    },
    clinicBookNumber: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: colors.borderColor,
        marginRight: 20,
        paddingHorizontal: 5,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: colors.mediumColor,
        height: 60
    },
    clinicBookNumStaticText: {
        marginVertical: 2,
        fontSize: 10,
        fontWeight: '500',
        color: colors.borderColor
    },
    clinicBookNumText: {
        marginVertical: 2,
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        textAlignVertical:'center',
        color: colors.blackColor
    }
})
