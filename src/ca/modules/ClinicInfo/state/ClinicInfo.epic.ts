import { get } from 'lodash'
import { Epic } from 'redux-observable'
import { from, of } from 'rxjs'
import { switchMap, filter, catchError, mergeMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'

import { RootAction, RootState } from 'CaAppTypes'

import { clinicinfoAsync } from './ClinicInfo.action'


// contrived example!!!
export const clinicInfoEpic: Epic<
  RootAction,
  RootAction,
  RootState
> = (
    action$,
    state$,
    { notification, logger }
  ) =>
    action$.pipe(
      filter(isActionOf(clinicinfoAsync.request)),
      switchMap(action =>
        from(()=>{}).pipe(
          mergeMap(result => {
            return []
          }),
          catchError((error: Error) => {
            return of(error)
          })
        )
      )
    )