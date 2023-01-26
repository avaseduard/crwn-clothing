import { CategoryItem } from '../categories/category.types'

// Cast the item types into constants
export enum CART_ACTION_TYPES {
  SET_IS_CART_OPEN = 'cart/SET_IS_CART_OPEN',
  SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
  SET_CART_COUNT = 'cart/SET_CART_COUNT',
  SET_CART_TOTAL = 'cart/SET_CART_TOTAL',
}

// Creating a CartItem type where we are adding the quantity to the CategoryItem
export type CartItem = CategoryItem & {
  quantity: number
}
