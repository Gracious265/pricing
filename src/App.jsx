import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import PricingCard from './components/PricingCard'

function App() {
 

  return (
    <div className='h-full bg-gray-100'>
      <Navbar />
      <Pricing />
      <PricingCard />
    </div>
  )
}

export default App
