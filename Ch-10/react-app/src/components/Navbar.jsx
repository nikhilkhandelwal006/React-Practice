import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

//Note:-// anchor tag is not useful here that's why we use NavLink or Link tag

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <NavLink to="/" className={({isActive})=>isActive?"active-link":""}>
              Home
            </NavLink>
        </li>

        <li>
            <NavLink to="/about" className={({isActive})=>isActive?"active-link":""}>
             About
            </NavLink>
        </li>

        <li>
            <NavLink to="/dashboard" className={({isActive})=>isActive?"active-link":""}>
              Dashboard
            </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
