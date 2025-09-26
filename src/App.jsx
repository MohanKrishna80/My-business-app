import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/Home'
import ItemPage from './pages/Items'
import CartPage from './pages/cart'
import AccountPage from './pages/account'
import ContactPage from './pages/contact'


function App() {


  return (
    <>
        
        <Navbar/>
        
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/items' element={<ItemPage/>} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/account' element={<AccountPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
        </Routes>


    </>
  )
}

export default App
