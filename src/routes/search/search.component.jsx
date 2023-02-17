import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCategoriesMap } from '../../store/categories/category.selector'
import ProductCard from '../../components/product-card/product-card.component'
import './search.styles.scss'

const SearchBox = () => {
  const categoryMap = useSelector(selectCategoriesMap)
  const [search, setSearch] = useState('')
  // console.log(categoryMap)
  // console.log(search)

  // const a = Object.keys(categoryMap).filter(b => b != '')
  // console.log(a)
  // const b = Object.values(categoryMap).map(c => c.filter(d => d.id !== ''))
  // console.log(b)
  const filteredCategoryMap = Object.values(categoryMap)
    .flat(1)
    .filter(items => items.name.toLocaleLowerCase().includes(search))
  // filteredCategoryMap.map(d => console.log(d.price))

  // const filteredDrone = Object.values(categoryMap).map(
  //   category =>
  //     category.map(
  //       product => product.filter(drone => drone.name.includes(search))
  // .toLocaleLowerCase().includes(search))
  // )
  // filter(
  //   product => product.name.toLowerCase().includes(search)
  // product.filter(drone => drone.name.includes(search))
  // )
  // )
  // console.log(filteredDrone)

  // onChange={event => setSearch(event.target.value.toLocaleLowerCase())}

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
                placeholder="It just can't be pizza..."
                onChange={event =>
                  setSearch(event.target.value.toLocaleLowerCase())
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className='product-card-container'>
        {filteredCategoryMap.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default SearchBox
