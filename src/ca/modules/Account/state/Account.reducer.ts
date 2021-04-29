import { createReducer } from 'typesafe-actions'

import { setUser } from './Account.action'

const initialState = {
  user: null,
  loading: false,
}

export const reducer = createReducer(initialState)
  .handleAction(setUser, (state, action) => ({
    ...state,
    user: action.payload,
  }))

export type UserState = ReturnType<typeof reducer>
