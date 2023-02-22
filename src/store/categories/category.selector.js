import { createSelector } from 'reselect'

const selectCategoryReducer = state => state.categories

// Create a memoized selector; first argument is an arrray of input selectors (the slices we want from redux to produce sometthing outside), second argument is the output selector; it only runs when the categoriesSlice is different
export const selectCategories = createSelector(
  [selectCategoryReducer],
  categoriesSlice => categoriesSlice.categories
)

// It runs once, as long as the categories array does not change, this method does not run
export const selectCategoriesMap = createSelector(
  [selectCategories],
  categories =>
    categories.reduce((acc, category) => {
      const { title, items } = category
      acc[title.toLowerCase()] = items
      return acc
    }, {})
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  categoriesSlice => categoriesSlice.isLoading
)

export const selectShopData = createSelector(
  [selectCategories],
  categories => categories,
  {}
)
