import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <Link to=''>Parent</Link>
                                <ul className="p-2">
                                    <li><Link to=''>Submenu 1</Link></li>
                                    <li><Link to=''>Submenu 2</Link></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/user'> User</Link></li>
                        <li><Link to='portfolio'>Portfolio</Link></li>
                        <li><Link to='/comments'>Comment</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='' className="btn">Button</Link>
                </div>
            </div>
            <h2>This is Home section in my website</h2>
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar