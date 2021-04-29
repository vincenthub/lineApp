import { StateType, ActionType } from 'typesafe-actions'

import { rootReducer } from './rootReducer'
import { rootAction } from './rootAction'
// import { store } from './store'

declare module 'CaAppTypes' {
  // export type Store = StateType<typeof store>
  export type RootAction = ActionType<typeof rootAction>
  export type RootState = StateType<ReturnType<typeof rootReducer>>

  // navigation
  export type StackNavigation = {
    navigate: (route: string) => void;
  }

  // API
  export type ServerResponse<T> = Promise<T>
}

