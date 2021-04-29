import { createAsyncAction } from 'typesafe-actions'


export const actionConstants = {
  CLINICINFO_START: 'clinicinfo/CLINICINFO_START',
  CLINICINFO_SUCCESS: 'clinicinfo/CLINICINFO_SUCCESS',
  CLINICINFO_FAIL: 'clinicinfo/CLINICINFO_FAIL',
}

export const clinicinfoAsync = createAsyncAction(
  actionConstants. CLINICINFO_START,
  actionConstants.CLINICINFO_SUCCESS,
  actionConstants.CLINICINFO_FAIL,
)<{}>()
