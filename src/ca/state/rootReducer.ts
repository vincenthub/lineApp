import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

import { reducer as account } from '@lineapp-ca-modules/Account/state'
import { reducer as login } from '@lineapp-ca-modules/Login/state'
import { reducer as register } from '@lineapp-ca-modules/Register/state'
import { reducer as home } from '@lineapp-ca-modules/Home/state'
import { reducer as profile } from '@lineapp-ca-modules/Profile/state'

export const rootReducer = combineReducers({
  account,
  login,
  register,
  home,
  profile,
  firebase: firebaseReducer
})
