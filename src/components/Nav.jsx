import React from 'react'
import logo from '../assets/logo/Reride_Logo.png'
import {Link} from 'react-router'

const Nav = () => {
  return (
    <>
        <header className="p-5 bg-primary backdrop-blur-lg border-b border-gray-200/20">
        <nav className="flex justify-between justify-self-center items-center w-full px-20">
            <div className="flex justify-center items-center">
                <img src={logo} alt="logo" width="200px"/>
            </div>
            <div className="">
                <ul className="flex ">
                    <li className="m-1"><Link to="/"
                            className="mx-1 p-2 hover:rounded-lg hover:border-b-4 hover:border-b-secondary">Home</Link></li>
                    <li className="m-1"><Link to="/buy"
                            className="mx-1 p-2 hover:rounded-lg hover:border-b-4 hover:border-b-secondary">Buy</Link></li>
                    <li className="m-1"><Link to="/sell"
                            className="mx-1 p-2 hover:rounded-lg hover:border-b-4 hover:border-b-secondary">Sell</Link></li>
                    <li className="m-1"><Link to="/about"
                            className="mx-1 p-2 hover:rounded-lg hover:border-b-4 hover:border-b-secondary">About</Link></li>
                    <li className="m-1"><Link to="/contact"
                            className="mx-1 p-2 hover:rounded-lg hover:border-b-4 hover:border-b-secondary">Contact</Link></li>
                </ul>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Nav