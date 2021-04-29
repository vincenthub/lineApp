import { get } from 'lodash'
import { Epic } from 'redux-observable'
import { from, of } from 'rxjs'
import { switchMap, filter, catchError, mergeMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import auth from '@react-native-firebase/auth';

import { RootAction, RootState } from 'CaAppTypes'
import { t } from '@lineapp-utils/localize'

import { setUser } from '@lineapp-ca-modules/Account/state/Account.action'
import { logInfo } from '@lineapp-components/Logger/Logger'
import { loginAsync, logoutAsync } from './Login.action'
import { transformLoginResultToUserVO } from './Login.transform'


// contrived example!!!
export const loginEpic: Epic<
  RootAction,
  RootAction,
  RootState
> = (
    action$,
    state$,
    { notification, logger }
  ) =>
    action$.pipe(
      filter(isActionOf(loginAsync.request)),
      switchMap(action =>
        from(
          auth().signInWithEmailAndPassword(action.payload.email, action.payload.password)
        ).pipe(
          mergeMap(result => {
            logInfo('Firebase Result::', result)
            const resultData = get(result, 'user')
            logInfo('Firebase User::', resultData)
            const toResultData = transformLoginResultToUserVO(resultData)
            return [loginAsync.success(toResultData), setUser(toResultData)]
          }),
          catchError((error: Error) => {
            return of(loginAsync.failure(error.message))
          })
        )
      )
    )

export const logoutEpic: Epic<
    RootAction,
    RootAction,
    RootState
  > = (
      action$,
      state$,
      { notification, logger }
    ) =>
      action$.pipe(
        filter(isActionOf(logoutAsync.request)),
        switchMap(action =>
          from(
            auth().signOut()
          ).pipe(
            mergeMap(result => {
              return [setUser(null)]
            }),
            catchError((error: Error) => {
              return of(loginAsync.failure(error.message))
            })
          )
        )
      )
