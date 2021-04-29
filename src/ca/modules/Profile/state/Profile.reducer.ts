import { from } from 'rxjs'
import { createReducer } from 'typesafe-actions'

import { profileAsync } from './Profile.action'
import { logoutAsync } from '@lineapp-ca-modules/Login/state/Login.action' 

const initialState = {
  isLoggedIn: false,
  loading: false,
  error: null,
}

export const reducer = createReducer(initialState)

  .handleAction(logoutAsync.request, state => ({
    ...state,
    isLoggedIn: false,
    loading: true,
    error: null,
  }))
  .handleAction(logoutAsync.success, (state, action) => ({
    ...state,
    user: action.payload,
    isLoggedIn: false,
    loading: false,
    error: null,
  }))
  .handleAction(logoutAsync.failure, (state, action) => ({
    ...state,
    isLoggedIn: false,
    loading: false,
    error: action.payload,
  }))


export type ProfileState = ReturnType<typeof reducer>
