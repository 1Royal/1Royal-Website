import React from 'react'
import {Routes, Route} from "react-router-dom"
// ! Pages 
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import AllProducts from './pages/AllProducts'
import Product from './pages/Product'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'

// ! Components
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

      <Navbar />

      <Routes>
        <Route path='/' element={Home} />
        <Route path='/about' element={About} />
        <Route path='/contact' element={Contact} />
        <Route path='/cart' element={Cart} />
        <Route path='/allproducts' element={AllProducts} />
        <Route path='/product/:productId' element={Product} />
        <Route path='/login' element={Login} />
        <Route path='/place-order' element={PlaceOrder} />
      </Routes>
    </div>    
  )
}

export default App