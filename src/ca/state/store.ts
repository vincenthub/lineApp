import { compose, applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

import { httpRequest } from '@lineapp-utils/httpRequest'
import { logger } from  '@lineapp-components/Logger/Logger'

import { RootAction, RootState } from 'CaAppTypes'

import { rootReducer } from './rootReducer'
import { rootEpic }from './rootEpic'

const persistVersion = 1
const persistReducerConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'login',
    'register',
    'home',
    'profile'
  ],
  version: persistVersion,
}

export function configureStore() {
  
  // for more config options, visit http://docs.react-redux-firebase.com/history/v2.0.0/docs/api/compose.html
  
  const reduxFirebaseConfig = {
    userProfile: 'users' // save users profiles to 'users' collection
  }
  
  // const notification = getNotificationService()

  const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>({
    dependencies: { httpRequest, logger } //add notification
  })

  // configure middlewares
  const middlewares = applyMiddleware(epicMiddleware)
  const enhancers = [middlewares]

  // run devtools
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  const initialState = window.__INITIAL_STATE__ || {
    firebase: { authError: null }
  }

  // rehydrate state on app start
  const persistedReducer = persistReducer(
    persistReducerConfig,
    rootReducer
  )

  // create store
  const store = createStore(persistedReducer, initialState, compose(...enhancers))
  const persistor = persistStore(store)


  // run epics to listen to events
  epicMiddleware.run(rootEpic)

  return { store, persistor }
}
