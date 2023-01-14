import { CATEGORIES_ACTION_TYPES } from './category.types'
import { createAction } from '../../utils/reducer/reducer.utils'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

// export const setCategories = categoriesArray =>
//   createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray)

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSucces = categoriesArray =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCES, categoriesArray)

export const fetchCategoriesFailed = error =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)

// // Use redux thunk to asyncronously fetch the categoriesArray; do not use if we fetch with saga
// export const fetchCategoriesAsync = () => async dispatch => {
//   dispatch(fetchCategoriesStart())
//   try {
//     const categoriesArray = await getCategoriesAndDocuments('categories')
//     dispatch(fetchCategoriesSucces(categoriesArray))
//   } catch (error) {
//     dispatch(fetchCategoriesFailed(error))
//   }
// }
