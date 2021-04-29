import { camelCase, get, set } from 'lodash'

import { ClinicVO } from 'ClinicInfoModuleTypes'

export const transformLoginResultToUserVO = (data: ClinicVO ): ClinicVO => {
  const fieldsKeys = Object.keys(data)
  const tFrields = fieldsKeys.reduce((acc, cur) => {
    const tFieldKey = camelCase(cur)
    const value = get(data, cur)
    set(acc, tFieldKey, value)
    return acc
  }, {})
  return tFrields as ClinicVO
}
