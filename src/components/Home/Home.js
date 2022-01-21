import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../features/slices/productSlice'
import { addToCart } from '../../features/slices/cartSlice'
import './Home.css'
const Home = () => {
  const image = 'https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg'
  const [datas, setDatas] = useState([])
  const dispatch = useDispatch()
  const history = useHistory()

  const productStore = useSelector((state) => state.product.data)

  useEffect(() => {
    if (datas.length === 0) {
      dispatch(fetchProduct())
    }
    setDatas(productStore)
  }, [productStore])

  const handleClick = (product) => {
    dispatch(addToCart(product))
    history.push('/cart')
  }
  return (
    <main>
      <Container className='home-container'>
        <h2>Welcome to Mero Shopping</h2>
        <div className='render-products'>
          {datas?.map((product) => {
            return (
              <div key={product.id} className='render-product'>
                <img src={image} alt='img' />
                <h3>{product.name}</h3>
                <div className='product-details'>
                  <span className='product-price'>{product.price}</span>
                  <span>Stock: {product.stock}</span>
                </div>
                <button onClick={() => handleClick(product)}>
                  Add to Cart
                </button>
              </div>
            )
          })}
        </div>
      </Container>
    </main>
  )
}

export default Home
