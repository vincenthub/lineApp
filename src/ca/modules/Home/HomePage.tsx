
import React, { useEffect, useState } from 'react'
import { View,Text, FlatList, TextInput, Modal, TouchableWithoutFeedback, Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontawesome from 'react-native-vector-icons/FontAwesome5';

import { RootState } from 'CaAppTypes'
import { CityParams } from 'HomeModuleTypes'
import { actions, selectors } from '@lineapp-ca-modules/Login/state'
import { AuthNavParmProps } from '@lineapp-ca-navigations/Auth.types';
import { rowCard as RowCard } from '@lineapp-components/Cards/Cards';
import { CategoryCard as CatCard } from '@lineapp-components/Cards/CategoryCard'
import { styles } from './HomePage.style'
import { AddressHeader } from './AddressHeader/AddressHeader';
import { colors } from '@lineapp-themes/Colors';
import { CityListing } from '@lineapp-components/CustomListing/CityListing';
import { logInfo } from '@lineapp-components/Logger/Logger';

const CATEGORYDATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2821a',
        categoryName: 'Dental Care',
        categoryIcon: 'DEN',
        color: "#639676",
        doctors: 20,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad52abb2821a',
        categoryName: 'Cardio Specialist',
        categoryIcon: 'CRD',
        color: "#5484FF",
        doctors: 10,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-2d53ab2821a',
        categoryName: 'Derma Care',
        categoryIcon: 'DRM',
        color: "#FFAD6A",
        doctors: 32,
    },
    {
        id: 'bd7ac2-c1b1-46c2-aed5-2d53ab2821a',
        categoryName: 'Physical Therapy',
        categoryIcon: 'PYT',
        color: "#BA7EFE",
        doctors: 10,
    },
]

const CITIES = [
    {
        id: 'bd7a2ea-c1b1-46c2-aed5-3ad53abb28ba',
        cityName: 'Cebu City',
        clinics: 20,
        selected: false
    },
    {
        id: 'bd7a2ea-c1b1-46c2-aed5-323d53abb28ba',
        cityName: 'Lapu-Lapu City',
        clinics: 14,
        selected: false
    },
    {
        id: 'bd7a2ea-c1b1-46c2-aed5-3ad53abb64a',
        cityName: 'Mandaue City',
        clinics: 12,
        selected: false
    },
    {
        id: 'bd7a2ea-c1b1-46c2-aed5-3ad53a2d8ba',
        cityName: 'Pagadian City',
        clinics: 6,
        selected: true
    },
]

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      icon: 'ICON1',
      name: 'Eyah Dental Clinic',
      address: '2nd floor ZDS Multilaboratory Virata Building,Rizal Avenue 7016 Pagadian City, Philippines',
      comment: 'Recommended!',
      ratings: '1000',
      status: 1
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      icon: 'ICON2',
      name: 'Eyah Dental Clinic',
      address: 'Rizal Avenue 7016 Pagadian City, Philippines',
      ratings: '300',
      comment: 'Amazing!',
      status: 0
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      icon: 'ICON3',
      name: 'Eyah Dental Clinic',
      address: 'Pagadian City, Philippines',
      comment: 'Great!',
      ratings: '500',
      status: 1
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29272',
        icon: 'ICON3',
        name: 'Eyah Dental Clinic',
        address: '2nd floor ZDS Multilaboratory Virata Building,Rizal Avenue 7016 Pagadian City, Philippines',
        comment: 'Great!',
        ratings: '500',
        status: 1
    },
    {
        id: '58694a0f-3da1-471f-bd96-143571e29d72',
        icon: 'ICON3',
        name: 'Eyah Dental Clinic',
        address: '2nd floor ZDS Multilaboratory Virata Building,Rizal Avenue 7016 Pagadian City, Philippines',
        comment: 'Great!',
        ratings: '500',
        status: 1
    }
];

const mapStateToProps = (state: RootState) => ({
    isLoggedIn: selectors.getIsLoggedIn(state),
    errorMessages: selectors.getError(state)
})
    
const dispatchProps = {
    logout: actions.logoutAsync.request,
}   
  
const navProps = (props: AuthNavParmProps<'Register'>) => ({
    navigation: props.navigation,
    route: props.route
})

type HomePaageProps  = ReturnType<typeof mapStateToProps> & typeof dispatchProps & ReturnType<typeof navProps>
  

export const HomePage: React.FC<{}> = (props:HomePaageProps) => {

    const {logout, isLoggedIn, navigation } = props
    const [showModal, setShowModal] = useState(false);
    const [selectedCity, setSelectedCity] = useState<CityParams | undefined>(undefined)

    useEffect(()=>{

        if(selectedCity === undefined){
            CITIES.map((item: any, index: any) => {
                item.selected? setSelectedCity(item): setSelectedCity(undefined)
            })
        }else{
            navigation.setOptions({
                headerLeft: () => (
                    <AddressHeader
                        navigation={navigation}
                        searchOnChangeText={selectedCity != undefined? selectedCity.cityName : ''}
                        pressHeader={() => onShowModal()}
                    />
                ),
            });
        }
    },[selectedCity])

    React.useLayoutEffect(() => {
        const city = selectedCity
        navigation.setOptions({
            headerLeft: () => (
                <AddressHeader
                    navigation={navigation}
                    searchOnChangeText={city != undefined? city.cityName : ''}
                    pressHeader={() => onShowModal() }
                />
            ),
            headerRight: ({ onPress }) => (
                <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
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
                        <Fontawesome name="user-circle" size={26} color={colors.dropDownText} />
                    </View>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    function onShowModal(){
        setShowModal(!showModal)
    }

    const getSelectedCity = (item) => {
        setSelectedCity(item)
        onShowModal()
        logInfo('Selected City::',item)
    }

    const renderClinicItem = ({ item }) => (
        <RowCard
            cName={item.name}
            cAddress={item.address}
            cStatus={item.status}
            cardIcon={item.icon}
            cComment={item.comment}
            cReviews={item.ratings}
            onPressRow={() => navigation.navigate('ClinicInfo')}
        />
    );

    // const renderCategoryItem = ({ item }) => (
    //     <CatCard
    //         catIcon={item.categoryIcon} 
    //         catName={item.categoryName}
    //         color={item.color}
    //         doctors={item.doctors}
    //     />
    // );
    

    return (
        <View style={styles.container}>
            <Modal
                key={"modal"}
                visible={showModal}
                transparent={true}
                animationType={"fade"}
                onRequestClose={() => onShowModal()}
                statusBarTranslucent={true}
                hardwareAccelerated={true}
            >
                <View style={styles.modalTopContainer}>
                    <TouchableWithoutFeedback onPress={() => onShowModal()}>
                        <View style={styles.modalTopContainer}/>
                    </TouchableWithoutFeedback >
                    <View style={styles.modalContainer}>
                        <View style={styles.searchBarLocation}>
                            <EvilIcons name="search" size={22} color="#000" />
                            <TextInput 
                                style={styles.searchTextInput}
                                placeholder='Search City'
                                numberOfLines={1}
                            />
                        </View>
                        <Text style={styles.headerCityText}>LOCATIONS</Text>
                        <CityListing 
                            listData={CITIES} 
                            getSelectedItem={getSelectedCity} 
                            initialSelectedItem={selectedCity}
                        />
                    </View>
                </View>
            </Modal>
            <View style={styles.greetingsBarContainer}>
                <View style={styles.greetingsBarView}>
                    <Text style={styles.headerTitleText}>Good Morning, Juan!</Text>
                </View>
                <View style={styles.listHeaderView}>
                    <Text style={styles.greetingsText}>Find Your Desired Clinic</Text>
                </View>
            </View>
            <View style={styles.flatlistContainer}>
                <View style={styles.banner}/>
                <View style={styles.searchBar}>
                    <EvilIcons name="search" size={22} color="#000" />
                    <TextInput 
                        style={styles.searchTextInput}
                        placeholder='Search clinic name'
                        numberOfLines={1}
                    />
                </View>
                {/* <View style={styles.categories}>
                    <Text style={styles.headerText}>Categories</Text>
                    <FlatList
                        style={styles.categoriesList}
                        data={CATEGORYDATA}
                        renderItem={renderCategoryItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View> */}
                <View style={styles.clinics}>
                    <Text style={styles.headerText}>Book a Clinic</Text>
                    <FlatList
                        style={styles.flatlist}
                        data={DATA}
                        renderItem={renderClinicItem}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </View>
    );
}

export const HomePageReduxed = connect(
    mapStateToProps,
    dispatchProps
)(HomePage)


