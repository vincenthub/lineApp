import { createReducer } from 'typesafe-actions'

import { loginAsync, logoutAsync } from './Login.action'

const initialState = {
  isLoggedIn: false,
  loading: false,
  error: null,
}

export const reducer = createReducer(initialState)
  .handleAction(loginAsync.request, state => ({
    ...state,
    isLoggedIn: false,
    loading: true,
    error: null,
  }))
  .handleAction(loginAsync.success, (state, action) => ({
    ...state,
    user: action.payload,
    isLoggedIn: true,
    loading: false,
    error: null,
  }))
  .handleAction(loginAsync.failure, (state, action) => ({
    ...state,
    isLoggedIn: false,
    loading: false,
    error: action.payload,
  }))
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


export type LoginState = ReturnType<typeof reducer>
