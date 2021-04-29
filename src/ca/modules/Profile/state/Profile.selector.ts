import { RootState } from 'CaAppTypes'

export const getIsLoggedIn = (state: RootState): boolean => state.profile.isLoggedIn
export const getLoading = (state: RootState): boolean => state.profile.loading
export const getError = (state: RootState): string => state.profile.error
