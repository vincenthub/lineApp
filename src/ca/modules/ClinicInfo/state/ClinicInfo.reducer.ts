import { from } from 'rxjs'
import { createReducer } from 'typesafe-actions'

import { clinicinfoAsync } from './ClinicInfo.action'

const initialState = {
  getClinicInfo: false,
  loading: false,
  error: null,
}

export const reducer = createReducer(initialState)

  .handleAction(clinicinfoAsync.request, state => ({
    ...state,
    getClinicInfo: null,
    loading: true,
    error: null,
  }))
  .handleAction(clinicinfoAsync.success, (state, action) => ({
    ...state,
    getClinicInfo: action.payload,
    loading: false,
    error: null,
  }))
  .handleAction(clinicinfoAsync.failure, (state, action) => ({
    ...state,
    getClinicInfo: null,
    loading: false,
    error: action.payload,
  }))


export type ProfileState = ReturnType<typeof reducer>
