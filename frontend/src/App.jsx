import React from 'react'
import Footer from './components/Layouts/Footer'
import Navbar from './components/Layouts/Navbar'
import Landing from './components/Layouts/Landing'
import { Routes,Route  } from 'react-router-dom'
import Register from './Auth/Register'
import Login from './Auth/Login'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
   
    <Route path='/' element={<Landing/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
   
    </Routes>
    <Footer/>
    </>
  )
}

export default App