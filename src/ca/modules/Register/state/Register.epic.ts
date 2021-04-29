import { get } from 'lodash'
import { Epic } from 'redux-observable'
import { from, of } from 'rxjs'
import { switchMap, filter, catchError, mergeMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'

import { RootAction, RootState } from 'CaAppTypes'
import { t } from '@lineapp-utils/localize'

import { setUser } from '@lineapp-ca-modules/Account/state/Account.action'
import { logInfo } from '@lineapp-components/Logger/Logger'
import { registerAsync } from './Register.action'
import { transformLoginResultToUserVO } from './Register.transform'
import auth from '@react-native-firebase/auth';

// contrived example!!!
export const registerEpic: Epic<
  RootAction,
  RootAction,
  RootState
> = (
    action$,
    state$,
    { notification, logger }
  ) =>
    action$.pipe(
      filter(isActionOf(registerAsync.request)),
      switchMap(action =>
        from(
          auth().createUserWithEmailAndPassword(action.payload.email, action.payload.password)
        ).pipe(
          mergeMap(result => {
            logInfo('Firebase Result::', result)
            const resultData = get(result, '')
            const toResultData = transformLoginResultToUserVO(resultData)
            return [registerAsync.success(toResultData), setUser(toResultData)]
          }),
          catchError((error: Error) => {
            return of(registerAsync.failure(error.message))
          })
        )
      )
    )
