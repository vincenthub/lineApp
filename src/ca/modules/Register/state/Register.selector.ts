import { RootState } from 'CaAppTypes'

export const getIsRegisterIn = (state: RootState): boolean => state.register.isRegisterIn
export const getError = (state: RootState): string => state.register.error
export const getLoading = (state: RootState): string => state.register.loading
