import { RootState } from 'CaAppTypes'

export const getClinicInfo = (state: RootState): boolean => state.profile.getClinicInfo
export const getLoading = (state: RootState): boolean => state.profile.loading
export const getError = (state: RootState): string => state.profile.error
