import { createAsyncAction } from 'typesafe-actions'

import { UserVO } from  'LoginModuleTypes'

import { LoginParams } from  '../LoginPage.type'

export const actionConstants = {
  LOGIN_START: 'login/LOGIN_START',
  LOGIN_SUCCESS: 'login/LOGIN_SUCCESS',
  LOGIN_FAIL: 'login/LOGIN_FAIL',
  LOGOUT_START: 'login/LOGOUT_START',
  LOGOUT_SUCCESS: 'login/LOGOUT_SUCCESS',
  LOGOUT_FAIL: 'login/LOGOUT_FAIL',
}

export const loginAsync = createAsyncAction(
  actionConstants.LOGIN_START,
  actionConstants.LOGIN_SUCCESS,
  actionConstants.LOGIN_FAIL,
)<LoginParams, UserVO, string>()

export const logoutAsync = createAsyncAction(
  actionConstants.LOGOUT_START,
  actionConstants.LOGOUT_SUCCESS,
  actionConstants.LOGOUT_FAIL,
)<undefined, undefined, string>()
