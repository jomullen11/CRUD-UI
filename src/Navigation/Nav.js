import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return(
    <nav className="navBar">
        <NavLink exact to='/'>Read Update and Delete</NavLink>
        <NavLink to='/create'>Create</NavLink>
    </nav>
)}

export default Nav