import { camelCase, get, set } from 'lodash'

import { UserVO } from 'AccountModuleTypes'
import { LoginResultVO } from 'LoginModuleTypes'

export const transformLoginResultToUserVO = (data: LoginResultVO ): UserVO => {
  const fieldsKeys = Object.keys(data)
  const tFrields = fieldsKeys.reduce((acc, cur) => {
    const tFieldKey = camelCase(cur)
    const value = get(data, cur)
    set(acc, tFieldKey, value)
    return acc
  }, {})
  return tFrields as UserVO
}
