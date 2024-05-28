import React from 'react'
import Product from './Website/Pages/Product'
import Features from './Website/Pages/Features'
import Contact from './Website/Pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Reviews from './Website/Pages/Reviews'
import Pricing from './Website/Pages/Pricing'
import Dashboard from './Admin/Dashboard'
import Categories from './Admin/Categories'





function App() {
  return (

    <div>
         <BrowserRouter>
        <Routes>
          <Route path='/' element={<Product/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/reviews' element={<Reviews/>}/>
          <Route path='/pricing' element={<Pricing/>}/>

          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/category' element={<Categories/>}/>




         
         
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App