// @flow
import auth from '@react-native-firebase/auth';
import { RegisterParams, RegisterResultVO } from 'RegisterModuleTypes'

export const register = (
  params: RegisterParams
): ServerResponse<RegisterResultVO> => {
  const url = apiUrlRegister
  const toParams = {
    ...params,
    // eslint-disable-next-line @typescript-eslint/camelcase
    social_token: '1',
    // eslint-disable-next-line @typescript-eslint/camelcase
    register_type: '1',
    // eslint-disable-next-line @typescript-eslint/camelcase
    device_oken: 'test',
    // eslint-disable-next-line @typescript-eslint/camelcase
    device_type: '1',
  }

  // mockApiReponse('success')

  return axios.post(url, toParams)
}