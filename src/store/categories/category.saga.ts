import { all, call, put, takeLatest } from 'typed-redux-saga/macro'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { fetchCategoriesSucces, fetchCategoriesFailed } from './category.action'
import { CATEGORIES_ACTION_TYPES } from './category.types'

// Fetch categories from firebase using the function generator (before we had async await)
export function* fetchCategoriesAsync() {
  try {
    // const categoriesArray = await getCategoriesAndDocuments('categories')
    const categoriesArray = yield* call(getCategoriesAndDocuments) // almost the same thing as above
    // dispatch(fetchCategoriesSucces(categoriesArray))
    yield* put(fetchCategoriesSucces(categoriesArray)) // almost the same thing as above
  } catch (error) {
    // dispatch(fetchCategoriesFailed(error))
    yield* put(fetchCategoriesFailed(error as Error))
  }
}

// Start categories fetch
export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  )
}

// All is an effect that runs everything inside and only complete when everything is done
export function* categoriesSaga() {
  yield* all([call(onFetchCategories)])
}
