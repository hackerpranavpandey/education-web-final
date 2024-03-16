import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <h1 className="title">Education Hub<span className="texture"></span></h1>
            <NavLink to='/' activeclassname='active' >Home</NavLink>
            <NavLink to='/courses' >Courses</NavLink>
            <NavLink to='/books' >Books</NavLink>
            <NavLink to='/community' >Community</NavLink>
            <div className="account"><i class='bx bxs-user'></i>Account</div>
        </nav>
    )
}

export default Header


