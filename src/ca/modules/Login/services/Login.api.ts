// @flow
import axios from 'axios'
// import MockAdapter from 'axios-mock-adapter'
import Config from 'react-native-config'

// import userLoginSuccess from '@tmchibog-ca-fixtures/user_login_success.json'
// import userLoginFailure from '@tmchibog-ca-fixtures/user_login_failed.json'

import { ServerResponse } from 'CaAppTypes'
import { LoginParams, LoginResultVO } from 'LoginModuleTypes'

const apiUrl = `${Config.API_URL}/user/login`

// const mockApiReponse = (mockType: null | 'success' | 'failure' = null): void => {
//   if (!mockType) {
//     return
//   }

//   const mockAdapter = new MockAdapter(axios)
//   let status
//   let responseData

//   if (mockType === 'success') {
//     status = 200
//     responseData = userLoginSuccess
//   }
//   else if (mockType === 'failure') {
//     status = 422
//     responseData = userLoginFailure
//   }

//   mockAdapter.onPost(apiUrl).reply(status, responseData)
// }

export const login = (
    params: LoginParams
  ): ServerResponse<LoginResultVO> => {
    const url = apiUrl
    const toParams = {
      ...params,
      // eslint-disable-next-line @typescript-eslint/camelcase
      device_token: 'test',
      // eslint-disable-next-line @typescript-eslint/camelcase
      device_type: '1',
      // eslint-disable-next-line @typescript-eslint/camelcase
      login_type: '1'
    }

    // mockApiReponse('success')

    return axios.post(url, toParams)
  }
