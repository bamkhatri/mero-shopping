import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Welcome to Mero Shopping</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
