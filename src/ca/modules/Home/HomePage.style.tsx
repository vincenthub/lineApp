import {
    StyleSheet, Dimensions
} from 'react-native';
  
import { colors } from '@lineapp-themes/Colors'
  
const { width } = Dimensions.get('window');
    
    
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: colors.mediumColor,
    },
    
    homeText: {
        fontSize: 20,
        fontWeight: '600'
    },
    
    logoutText: {
        marginTop: 20,
        fontSize: 14,
        fontWeight: '300',
        marginVertical: 4,
        textAlign: 'center',
        width: width - 100,
        color: colors.primaryTextColor
      },

    flatlistContainer: {
        flex:1,
        paddingBottom: 15,
        alignSelf: 'stretch', 
        backgroundColor: colors.mediumColor,
    },
    flatlist: {
        flex:1,
        alignSelf: 'stretch', 
        backgroundColor: colors.transparent,
    },
    greetingsBarContainer: {
        marginTop: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: colors.mediumColor,
    },
    greetingsBarView: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.mediumColor,
    },
    greetingsText: {
        fontSize: 28,
        fontWeight: '500',
        marginBottom: 10,
        color: colors.blackColor,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 3,
    },

    nameText: {
        fontSize: 28,
        fontWeight: '500',
        marginLeft: 8,
        color: colors.blackColor,
        shadowColor: colors.blackColor,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 3,
    },
    listHeaderView: {
        paddingTop: 5,
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    headerTitleText: {
        marginVertical: 5,
        fontSize: 18,
        fontWeight: '400',
        color: colors.rowBg
    },
    headerCityText: {
        marginTop: 20,
        fontSize: 14,
        fontWeight: '600',
        color: colors.blackColor,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 3,
    },

    categories: {
        paddingHorizontal: 20,
        marginTop: 10
    },
    categoriesList: {
        height: 120
    },
    clinics: {
        flex:1,
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        paddingVertical: 20,
        shadowColor: colors.blackColor, 
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 2,
    },
    banner:{
        alignSelf: 'stretch',
        marginVertical: 10,
        marginHorizontal: 20,
        marginTop: 10,
        height: 150,
        backgroundColor: colors.banner,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.whiteColor
    },
    searchBar: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: colors.whiteColor,
        height: 50,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 4,
    },
    searchBarLocation: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        marginTop: 20,
        backgroundColor: colors.whiteColor,
        height: 50,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 4,
    },
    searchTextInput: {
        flex: 1,
        alignSelf: 'stretch',
        marginLeft: 6
    },

    modalTopContainer: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalContainer: {
        position:'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        backgroundColor: colors.whiteColor,
        height: 500,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20
      },
    modalHeader: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.whiteColor,
    },
})