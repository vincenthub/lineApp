import { createReducer } from 'typesafe-actions'

import { registerAsync } from './Register.action'

const initialState = {
  isRegisterIn: false,
  loading: false,
  error: null,
}

export const reducer = createReducer(initialState)
  .handleAction(registerAsync.request, state => ({
    ...state,
    isRegisterIn: false,
    loading: true,
    error: null,
  }))
  .handleAction(registerAsync.success, (state, action) => ({
    ...state,
    user: action.payload,
    isRegisterIn: true,
    loading: false,
    error: null,
  }))
  .handleAction(registerAsync.failure, (state, action) => ({
    ...state,
    isRegisterIn: false,
    loading: false,
    error: action.payload,
  }))


export type RegisterState = ReturnType<typeof reducer>
