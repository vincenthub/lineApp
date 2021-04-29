import React, { useEffect, memo } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux'
import { StatusBar } from 'react-native';

import { RootState } from 'CaAppTypes'

import { AppTabs } from './AppTabs.nav'
import { AuthNav } from './Auth.nav'
import { boot } from '../boot'

import { selectors } from '@lineapp-ca-modules/Login/state'

const mapStateToProps = (state: RootState) => ({
    isLoggedIn: selectors.getIsLoggedIn(state)
})

type RoutesProps  = ReturnType<typeof mapStateToProps>

export const Routes: React.FC<{}> = (props: RoutesProps) => {

    const { isLoggedIn } = props

    useEffect(() => {
        boot()
    }, [])

    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            { isLoggedIn? <AppTabs /> : <AuthNav /> }
        </NavigationContainer>
    );
}

export const RoutesReduxed = connect(
    mapStateToProps,
)(memo(Routes))