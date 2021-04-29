import { createAsyncAction } from 'typesafe-actions'

import { UserVO, RegisterParams } from  'RegisterModuleTypes'


export const actionConstants = {
  REGISTER_START: 'register/LOGIN_START',
  REGISTER_SUCCESS: 'register/LOGIN_SUCCESS',
  REGISTER_FAIL: 'register/LOGIN_FAIL',
}

export const registerAsync = createAsyncAction(
  actionConstants.REGISTER_START,
  actionConstants.REGISTER_SUCCESS,
  actionConstants.REGISTER_FAIL,
)<RegisterParams, UserVO, string>()
