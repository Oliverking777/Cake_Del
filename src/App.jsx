import React, { useState } from 'react'
import Nav_bar from './Components/Nav_bar/Nav_bar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Place_Order from './pages/Place_Order/Place_Order'
import Foter from './Components/Foter/Foter'
import Sign_In from './Components/SIgn_In/Sign_In'
import My_Cart from './pages/My_Cart/My_Cart'


const App = () => {
  const [short_login,set_Show_Login]=useState(false)
  return (
    <>
    {short_login?<Sign_In set_Show_Login={set_Show_Login}/>:<></>}
      <div className='App'>
        <Nav_bar  set_Show_Login={set_Show_Login}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Place_Order />} />
          <Route path='/My_Cart' element={<My_Cart />} />

          


        </Routes>
      </div>
      <Foter />
    </>
  )
}

export default App