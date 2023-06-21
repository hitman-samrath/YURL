import React from 'react'
import './App.css'
import Login from './Auth/Login.jsx'
import Signup from './Auth/Signup.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App