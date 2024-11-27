import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='w-full bg-neutral-50 text-neutral-800 px-16 py-4 border-b border-neutral-200'>
            <div className="w-full flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className='text-2xl text-teal-600 font-bold'>
                    Logo
                </Link>

                {/* Nav items and button */}
                <div className="flex items-center gap-10">
                    {/* Nav Items */}
                    <ul className="list-none flex items-center gap-6 text-base text-neutral-600 font-medium">
                        <li>
                            <Link to="/" className='text-teal-600 ease-in-out duration-300'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className='hover:text-teal-600 ease-in-out duration-300'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className='hover:text-teal-600 ease-in-out duration-300'>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Button */}
                    <button className="bg-teal-600 block text-neutral-50 py-2 px-4 rounded-md hover:bg-teal-700 ease-in-out duration-300">
                        Write a Review
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar