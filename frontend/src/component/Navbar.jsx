import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-blue-700 p-4 shadow-md">
      <ul className="flex justify-around text-white font-semibold text-lg">
        <li><Link to="/" className="hover:underline">Student Dashboard</Link></li>
        <li><Link to="/admin" className="hover:underline">Admin Panel</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar