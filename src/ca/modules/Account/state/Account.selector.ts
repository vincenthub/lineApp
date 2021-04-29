import { RootState } from 'CaAppTypes'
import { UserVO } from 'AccountModuleTypes'

export const getUser = (state: RootState): UserVO => state.account.user