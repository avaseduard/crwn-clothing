import { createSelector } from 'reselect'
import { RootState } from '../store'
import { CategoriesState } from './category.reducer'
import { CategoryMap } from './category.types'


const selectCategoryReducer = (state: RootState): CategoriesState => state.categories

// Create a memoized selector; first argument is an arrray of input selectors, second argument is the output selector; it only runs when the categoriesSlice is different
export const selectCategories = createSelector(
  [selectCategoryReducer],
  categoriesSlice => categoriesSlice.categories
)

// It runs once, but the, as long as the categories array does not change, this method does not run
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category
      acc[title.toLowerCase()] = items
      return acc
    }, {} as CategoryMap)
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  categoriesSlice => categoriesSlice.isLoading
)
