import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home'
import Register from '../../pages/Register'
import Login from '../../pages/Login'
import Doctors from '../../pages/Doctors'
import Writers from '../../pages/Writers'
import Single from '../../pages/Single'
import Services from '../../pages/Services'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import About from '../../pages/About';
import Profile from '../../pages/Profile';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className='app-container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/journals" element={<Doctors />} />
            {/* <Route path="/doctors/:id" element={<DoctorDetails />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/authors" element={<Writers />} />
            <Route path="/journals/:id" element={<Single />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App