import { camelCase, get, set } from 'lodash'

import { UserVO } from 'AccountModuleTypes'
import { RegisterResultVO } from 'RegisterModuleTypes'

export const transformLoginResultToUserVO = (data: RegisterResultVO ): UserVO => {
  const fieldsKeys = Object.keys(data)
  const tFrields = fieldsKeys.reduce((acc, cur) => {
    const tFieldKey = camelCase(cur)
    const value = get(data, cur)
    set(acc, tFieldKey, value)
    return acc
  }, {})
  return tFrields as UserVO
}
