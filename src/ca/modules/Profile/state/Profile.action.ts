import { createAsyncAction } from 'typesafe-actions'


export const actionConstants = {
  PROFILE_START: 'profile/PROFILE_START',
  PROFILE_SUCCESS: 'profile/PROFILE_SUCCESS',
  PROFILE_FAIL: 'profile/PROFILE_FAIL',
}

export const profileAsync = createAsyncAction(
  actionConstants. PROFILE_START,
  actionConstants.PROFILE_SUCCESS,
  actionConstants.PROFILE_FAIL,
)<{}>()
