import { AnyAction } from 'redux'
import { setCartItems, setIsCartOpen } from './cart.action'
import { CART_ACTION_TYPES, CartItem } from './cart.types'

export type CartState = {
  readonly isCartOpen: boolean
  readonly cartItems: CartItem[]
}

// Initial state values of the reducer
export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
}

// Reducer function
export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    }
  }
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    }
  }
  return state
}
