import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import RNFirebaseApp from '@react-native-firebase/app';
import '@react-native-firebase/database'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { PersistGate } from 'redux-persist/integration/react'

import { RoutesReduxed } from './navigations/Routes.nav'
import { configureStore } from './state/store'

export const App: React.FC<{}> = ({}) => {

  // react-redux-firebase config
  const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }

  const { store, persistor } = configureStore()

  const rrfProps = {
    firebase: RNFirebaseApp,
    config: rrfConfig,
    dispatch: store.dispatch,
    // createFirestoreInstance // <- needed if using firestore
   }

  
    return (
      <ReduxProvider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <PersistGate loading={null} persistor={persistor}>
            <RoutesReduxed />
          </PersistGate>
        </ReactReduxFirebaseProvider>
      </ReduxProvider>
    );
}
