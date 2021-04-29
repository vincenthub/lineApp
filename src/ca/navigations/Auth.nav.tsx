import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity, View, Platform } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

import { LoginPageReduxed } from '@lineapp-ca-modules/Login/LoginPage'
import { RegisterPageReduxed } from '@lineapp-ca-modules/Register/RegisterPage'

import { colors } from '@lineapp-themes/Colors'
import { ParamList } from './Auth.types'

const StackNav = createStackNavigator<ParamList>();

export const AuthNav: React.FC<{}> = () => {
    return (
        <StackNav.Navigator
            screenOptions={{
            }}
            initialRouteName="Login"
        >
            {/* <StackNav.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                    headerShown: false
                }}
            /> */}

            <StackNav.Screen
                name="Login"
                component={LoginPageReduxed}
                options={{
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
                                </View>
                        </TouchableOpacity>
                    ),
                    headerBackTitle: '',
                    headerBackTitleStyle: { color: colors.primaryTextColor },
                    headerBackTitleVisible: false,
                    headerTintColor: colors.primaryTextColor,
                    headerTitle: '',
                    ...Platform.select({
                        ios: {
                            backgroundColor: 'transparent',
                        },
                        android: {
                            headerBackground: ()=>(null),
                        },
                        default: {
                        }
                      }),
                    headerStyle: {
                        backgroundColor: '#f1f3f6',
                        shadowOpacity: 0,
                        shadowOffset: {
                            height: 0,
                        },
                        shadowRadius: 0,
                    },
                    headerShown: true
                }}
            />

            <StackNav.Screen
                name="Register"
                component={RegisterPageReduxed}
                options={{
                    headerBackTitle: '',
                    headerBackTitleStyle: { color: colors.primaryTextColor },
                    headerBackTitleVisible: false,
                    headerTintColor: colors.primaryTextColor,
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
                    headerTitle: '',
                    ...Platform.select({
                        ios: {
                            backgroundColor: 'transparent',
                        },
                        android: {
                            headerBackground: ()=>(null),
                        },
                        default: {
                        }
                      }),
                    headerStyle: {
                        backgroundColor: '#f1f3f6',
                        shadowOpacity: 0,
                        shadowOffset: {
                            height: 0,
                        },
                        shadowRadius: 0,
                    },
                    headerShown: true
                }}
            />
            
        </StackNav.Navigator>
    )
}
