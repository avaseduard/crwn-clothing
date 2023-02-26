import { createSlice } from '@reduxjs/toolkit'

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      // Update the state with the action payload
      state.categories = action.payload
    },
  },
})

// Destructure the actions off setCurrentUser
export const { setCategories } = categoriesSlice.actions

// Get the reducer off the created slice
export const categoriesReducer = categoriesSlice.reducer
