import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../features/slices/productSlice'

const Home = () => {
  const [datas, setDatas] = useState([])
  const dispatch = useDispatch()

  const data = useSelector((state) => state.product.data)
  console.log(data)
  useEffect(() => {
    if (datas.length === 0) {
      dispatch(fetchProduct())
    }
    setDatas(data)
  }, [data])
  return (
    <main>
      <Container>
        <h1>Welcome to Mero Shopping</h1>
        {datas.map((data) => {
          const { id, name } = data
          return <div key={id}>{name}</div>
        })}
      </Container>
    </main>
  )
}

export default Home
