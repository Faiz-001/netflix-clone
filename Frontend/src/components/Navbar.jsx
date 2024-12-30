import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Menu } from "lucide-react"
import { useContentStore } from '../store/content.js'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState() 
    const toggleMobileView = () => setIsMobileMenuOpen(!isMobileMenuOpen)
    const {setContentType} = useContentStore()
    return (
        <header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
            <div className='flex items-center gap-10 z-50'>
                <Link to="/">
                    <img src="/netflix-logo.png" alt="Netflix Logo" className='w-32 sm:w-40' />
                </Link>
                <div className='hidden sm:flex gap-2 items-center'>
                    <Link to="/" className='hover:underline' onClick={() => setContentType("movie")}>
                        Movies
                    </Link>
                    <Link to="/" className='hover:underline' onClick={() => setContentType("tv")}>
                        Tv Shows
                    </Link>
                </div>
            </div>
            <div className='flex gap-2 items-center z-50'>
                <Link to={"/search"}>
                    <Search className='size-6 cursor-pointer'/> 
                </Link>
                <div className='sm:hidden'>
                    <Menu className="size-6 cursor-pointer" onClick={toggleMobileView} />
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className='w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800'>
                    <Link to={"/"} className='block hover:underline p-2 text-white'>
                        Movies
                    </Link>
                    <Link to={"/"} className='block hover:underline p-2 text-white'>
                        Tv Shows
                    </Link>
                </div>
            )}
        </header>
    )
}

export default Navbar