import {
    StyleSheet, Dimensions
} from 'react-native';
  
import { colors } from '@lineapp-themes/Colors'
  
const { width } = Dimensions.get('window');
    
    
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        backgroundColor: colors.whiteColor,
    },
    profileInfo: {
        height: 220,
        paddingVertical: 20,
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: colors.whiteColor,
        borderBottomWidth: 0.3,
        borderColor: colors.borderColor
    },
    userInfoContianer: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    userPhoto: {
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
    userInfo: {
        flex: 1,
        alignSelf: 'stretch',
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        justifyContent:'center'
    },
    userNameText: {
        fontSize: 20,
        fontWeight: '500',
        marginVertical: 5,
        color: colors.dropDownText,
        shadowOffset: {
            width: 0,
              height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1,
          elevation: 3,
    },
    addressText: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.secondaryTextColor,
        marginVertical: 3
    },
    additionalInfo: {
        marginVertical: 10,
        alignSelf: 'stretch'
    },

    contentList: {
        flex: 1,
        backgroundColor: colors.bgColor,
    },
    
    logoutbutton: {
        height: 80,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: colors.whiteColor,
        borderTopWidth: 0.3,
        borderColor: colors.borderColor
    },

    flatlist: {
        flex:1,
        alignSelf: 'stretch', 
        backgroundColor: colors.whiteColor,
    },
})