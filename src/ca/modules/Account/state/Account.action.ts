import { createAction } from 'typesafe-actions'

import { UserVO } from  'AccountModelTypes'

export const actionConstants = {
  SET_USER: 'user/SET_USER',
}

export const setUser = createAction(
  actionConstants.SET_USER
)<UserVO>()
