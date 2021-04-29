import React from 'react'
import { ParamList } from './Auth.types';
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Platform, TouchableOpacity, View } from 'react-native';

import { HomePageReduxed } from '@lineapp-ca-modules/Home/HomePage'
import { ProfilePageReduxed } from '@lineapp-ca-modules/Profile/ProfilePage'
import { ClinicInfoPageReduxed } from '@lineapp-ca-modules/ClinicInfo/ClinicInfoPage'
import { MyBooking } from '@lineapp-ca-modules/Booking/MyBooking'

import { colors } from '@lineapp-themes/Colors';
import { from } from 'rxjs';

// const Tabs = createBottomTabNavigator<ParamList>()
const StackNav = createStackNavigator<ParamList>()

const HorizontalTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 1],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
    };
  },
}

// function HomeTabs ({navigation}:AuthNavParmProps<'Home'>) {
//     return (
//         <Tabs.Navigator
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                     let iconName;

//                     if (route.name === 'Home') {
//                         return <AntDesign name={'home'} size={size} color={color} />;
//                     } else if (route.name === 'More') {
//                         return <Ionicons name={'md-menu'} size={size} color={color} />;
//                     }
//                 },
//             })}
//             tabBarOptions={{
//                 activeTintColor: Colors.orange500,
//                 inactiveTintColor: Colors.blue700,
//                 style:{backgroundColor:"#f1f3f6"}
//             }}
//         >
//             <Tabs.Screen name='Home' component={MerchantListPage} options={{tabBarLabel: 'Home'}}/>
//             <Tabs.Screen name='More' component={SettingStack} options={{tabBarLabel: 'More'}}/>
//         </Tabs.Navigator>
//     )
// }

export const AppTabs: React.FC<{}> = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="Home"
        component={HomePageReduxed}
        options={{
          headerTintColor: colors.mediumColor,
          headerStyle: {
            backgroundColor: colors.mediumColor,
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            },
          },
          ...HorizontalTransition
        }}
      />
      <StackNav.Screen
        name="Profile"
        component={ProfilePageReduxed}
        options={{
          headerShown: true,
          headerTitle: 'My Profile',
          headerBackTitle: '',
          headerBackTitleVisible: false,
          headerTitleStyle:{color: colors.dropDownText},
          headerLeft: ({ onPress }) => (
            <TouchableOpacity onPress={()=> onPress()}>
                <View style={{
                    ...Platform.select({
                        ios: {
                            marginLeft: 20
                        },
                        android: {
                            margin: 12
                        },
                        default: {
                        }
                      }) }}>
                    <AntDesign name="leftcircleo" size={26} color={colors.dropDownText} />
                </View>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: colors.whiteColor,
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            },
          },
          ...HorizontalTransition
        }}
      />
      <StackNav.Screen
        name="ClinicInfo"
        component={ClinicInfoPageReduxed}
        options={{
          headerShown: true,
          headerTitle: '',
          headerBackTitle: '',
          headerBackTitleVisible: false,
          headerLeft: ({ onPress }) => (
            <TouchableOpacity onPress={()=> onPress()}>
                <View style={{
                    ...Platform.select({
                        ios: {
                            marginLeft: 20
                        },
                        android: {
                            margin: 12
                        },
                        default: {
                        }
                      }) }}>
                    <AntDesign name="leftcircleo" size={26} color={colors.dropDownText} />
                </View>
            </TouchableOpacity> 
          ),
          headerRight: ({ onPress }) => (
            <TouchableOpacity onPress={()=> console.log('Ratings')}>
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
                    <MaterialIcons name="rate-review" size={32} color={colors.dropDownText} />
                </View>
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: colors.whiteColor,
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            },
          },
          ...HorizontalTransition
        }}
      />
      <StackNav.Screen
        name="MyBooking"
        component={MyBooking}
        options={{
          headerShown: true,
          headerTitle: 'My Bookings',
          headerBackTitle: '',
          headerBackTitleVisible: false,
          headerTitleStyle: {
            color: colors.dropDownText,
          },
          headerLeft: ({ onPress }) => (
            <TouchableOpacity onPress={()=> onPress()}>
                <View style={{
                    ...Platform.select({
                        ios: {
                            marginLeft: 20
                        },
                        android: {
                            margin: 12
                        },
                        default: {
                        }
                      }) }}>
                    <AntDesign name="leftcircleo" size={26} color={colors.dropDownText} />
                </View>
            </TouchableOpacity> 
          ),
          headerStyle: {
            backgroundColor: colors.whiteColor,
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            },
          },
          ...HorizontalTransition
        }}
      />

    </StackNav.Navigator>
  );
};
