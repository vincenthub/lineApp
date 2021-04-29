
import React from 'react'
import { Text, View, TouchableOpacity, Platform, FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

import { RootState } from 'CaAppTypes'
import { actions, selectors } from '@lineapp-ca-modules/Login/state'
import { Button } from '@lineapp-components/Buttons/Button';

import { styles } from './ProfilePage.style';
import { AuthNavParmProps } from '@lineapp-ca-navigations/Auth.types';
import { RowIconCard } from '@lineapp-components/Cards/RowIconCard'
import { connect } from 'react-redux';
import { colors } from '@lineapp-themes/Colors';


const SECTIONITEMS = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-2d53a21a',
        sectionName: 'My Bookings',
        sectionIcon: 'book',
        sectionRoute: 'MyBooking'
    },
]


const mapStateToProps = (state: RootState) => ({
})
    
const dispatchProps = {
    logout: actions.logoutAsync.request,
}   
  
const navProps = (props: AuthNavParmProps<'Register'>) => ({
    navigation: props.navigation,
    route: props.route
})

type ProfilePageProps  = ReturnType<typeof mapStateToProps> & typeof dispatchProps & ReturnType<typeof navProps>
  
const ProfilePage: React.FC<{}> = (props: ProfilePageProps) => {

    const {logout, navigation } = props

    const renderSectionsItems = ({ item }) => (
        <RowIconCard
            rowName={item.sectionName}
            iconName={item.sectionIcon}
            iconColor={colors.dropDownText}
            textSize={14}
            onPress={()=> navigation.navigate(item.sectionRoute)}
            setDisabled={false}
            withBorder={true}
        />
    );

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: ({ onPress }) => (
                <TouchableOpacity onPress={()=> console.log('On Edit Press')}>
                    <View style={{
                        ...Platform.select({
                            ios: {
                                marginRight: 20
                            },
                            android: {
                                margin: 12
                            },
                            default: {
                            }
                          }) }}>
                        <AntDesign name="edit" size={26} color={colors.dropDownText}/>
                    </View>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.profileInfo}>
                <View style={styles.userInfoContianer}>
                    <View style={styles.userPhoto}/>
                    <View style={styles.userInfo}>
                        <Text style={styles.userNameText}>Juan Dela Cruz</Text>
                        <Text style={styles.addressText}>Sabellano, St Pagadian City, Zamboanga del Sur, Philippines</Text>
                    </View>
                </View>
                <View style={styles.additionalInfo}>
                    <RowIconCard 
                        rowName={"(+63) 912535829"}
                        iconName={"phone"}
                        iconColor={"#9b9b9b"}
                        textSize={12}
                        onPress={()=>{}}
                        setDisabled={true}
                        withBorder={false}
                    />
                    <RowIconCard 
                        rowName={"juanDelaCruz@gmail.com"}
                        iconName={"mail"}
                        iconColor={"#9b9b9b"}
                        textSize={12}
                        onPress={()=>{}}
                        setDisabled={true}
                        withBorder={false}
                    />
                </View>
            </View>
            <View style={styles.contentList}>
                <FlatList
                    style={styles.flatlist}
                    data={SECTIONITEMS}
                    renderItem={renderSectionsItems}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={false}
                />
            </View>
            <View style={styles.logoutbutton}>
                <RowIconCard 
                    rowName={"Logout"}
                    iconName={"poweroff"}
                    iconColor={"#E02626"}
                    textSize={14}
                    onPress={()=> logout()}
                    setDisabled={false}
                    withBorder={false}
                />
            </View>
        </View>
    );
}

export const ProfilePageReduxed = connect(
    mapStateToProps,
    dispatchProps
)(ProfilePage)
