import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectShopData } from '../../store/categories/category.selector'
import ProductCard from '../../components/product-card/product-card.component'
import './search.styles.scss'

const Search = () => {
  const navigate = useNavigate()
  const shopData = useSelector(selectShopData)
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])

  useEffect(() => {
    const filteredData = shopData.map(({ items, ...rest }) => ({
      ...rest,
      items: items.filter(({ name }) =>
        name.toLocaleLowerCase().includes(search)
      ),
    }))
    setProducts(filteredData)
  }, [search, shopData])

  return (
    <div className='search-page-container'>
      <div className='Card'>
        <div className='CardInner'>
          <label>Search for your favourite drone</label>
          <div className='container'>
            <div className='Icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='black'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-search'
              >
                <circle cx='11' cy='11' r='8' />
                <line x1='21' y1='21' x2='16.65' y2='16.65' />
              </svg>
            </div>
            <div className='InputContainer'>
              <input
                type='text'
                autoFocus
                placeholder="buzz us if you can't find what you need..."
                onChange={event =>
                  setSearch(event.target.value.toLocaleLowerCase())
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className='product-card-container'>
        {products.map(category =>
          category.items.map(product => {
            return (
              <ProductCard
                onClick={() =>
                  navigate(`../shop/${category.title}/${product.name}`)
                }
                key={product.id}
                product={product}
              />
            )
          })
        )}
      </div>
    </div>
  )
}

export default Search
