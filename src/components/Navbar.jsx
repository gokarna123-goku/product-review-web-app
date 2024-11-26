import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="w-full bg-neutral-50 text-neutral-800 py-4 px-16 border-b border-neutral-200">
            <div className="w-full flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className='text-2xl font-bold text-teal-600'>
                    Logo
                </Link>

                {/* Navbar Items & Btn */}
                <div className="flex items-center gap-6">
                    {/* Navbar items links */}
                    <ul className="list-none flex items-center gap-4 text-base text-neutral-600 font-medium">
                        <li>
                            <Link to="/" className='text-teal-600 ease-in-out duration-300'>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className='hover:text-teal-600 ease-in-out duration-300'>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className='hover:text-teal-600 ease-in-out duration-300'>Contact</Link>
                        </li>
                    </ul>

                    {/* Button */}
                </div>
            </div>
        </header>
    )
}

export default Navbar