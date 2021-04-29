import { combineEpics } from 'redux-observable'

import  * as login  from '../modules/Login/state/Login.epic'
import  * as register  from '../modules/Register/state/Register.epic'
import  * as home  from '../modules/Home/state/Home.epic'
import  * as profile  from '../modules/Profile/state/Profile.epic'

export const rootEpic =  combineEpics (
    ...Object.values(login),
    ...Object.values(register),
    ...Object.values(home),
    ...Object.values(profile)
)
