import { RootState } from 'CaAppTypes'

export const getIsLoggedIn = (state: RootState): boolean => state.login.isLoggedIn
export const getLoading = (state: RootState): boolean => state.login.loading
export const getError = (state: RootState): string => state.login.error
