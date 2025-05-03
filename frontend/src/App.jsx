import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import StudentDashboard from './component/StudentDashboard'
import AdminPanel from './component/AdminPanel'

const App = () => {
  return (
    <BrowserRouter>
      
        <Navbar/>
        <Routes>
          <Route path="/" element={<StudentDashboard />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
    
    </BrowserRouter>
  )
}

export default App