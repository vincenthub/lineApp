
import { actions as login } from '@lineapp-ca-modules/Login/state'
import { actions as register } from '@lineapp-ca-modules/Register/state'
import { actions as home } from '@lineapp-ca-modules/Home/state'
import { actions as profile } from '@lineapp-ca-modules/Profile/state'

export const rootAction = {
  login,
  register,
  home,
  profile,
}
