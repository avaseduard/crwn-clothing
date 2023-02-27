import { memo, useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../store/cart/cart.reducer'
import { selectShopData } from '../../store/categories/category.selector'
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles'

const CheckoutItem = memo(({ cartItem }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [products, setProducts] = useState([])

  // Navigation to product page logic
  const shopData = useSelector(selectShopData)

  useEffect(() => {
    const filteredData = shopData.map(({ items, ...rest }) => ({
      ...rest,
      items: items.filter(({ id }) => id === cartItem.id),
    }))
    setProducts(filteredData)
  }, [shopData])

  // Cart item quantity manipulation logic
  const { name, quantity, price, imageUrl } = cartItem

  const addItemHandler = () => dispatch(addItemToCart(cartItem))

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem))

  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem))

  return (
    <CheckoutItemContainer>
      {products.map(category =>
        category.items.map(product => {
          return (
            <Fragment key={product.id}>
              <ImageContainer
                onClick={() =>
                  navigate(`../shop/${category.title}/${product.name}`)
                }
              >
                <img src={imageUrl} alt={name} />
              </ImageContainer>
              <BaseSpan
                onClick={() =>
                  navigate(`../shop/${category.title}/${product.name}`)
                }
                className='name'
              >
                {name}
              </BaseSpan>
            </Fragment>
          )
        })
      )}
      <Quantity className='quantity'>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>€{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
})

export default CheckoutItem
