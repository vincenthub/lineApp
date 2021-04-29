import { createAsyncAction } from 'typesafe-actions'


export const actionConstants = {
  HOME_START: 'home/LOGIN_START',
  HOME_SUCCESS: 'home/LOGIN_SUCCESS',
  HOME_FAIL: 'home/LOGIN_FAIL',
}

export const homeAsync = createAsyncAction(
  actionConstants. HOME_START,
  actionConstants.HOME_SUCCESS,
  actionConstants.HOME_FAIL,
)<{}>()
