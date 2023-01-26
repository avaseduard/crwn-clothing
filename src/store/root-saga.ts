// import { all, call } from '@redux-saga/core/effects'
import { all, call } from 'typed-redux-saga/macro'
import { categoriesSaga } from './categories/category.saga'
import { userSagas } from './user/user.saga'

// All sagas combine into one main root saga; JS ES6 generator function
export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSagas)])
}