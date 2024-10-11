import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import AllProducts from './AllProducts'
const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <AllProducts />
    </div>
  )
}

export default Home