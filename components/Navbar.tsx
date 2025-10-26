import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.svg'
import NavItems from './NavItems'

function Navbar() {
  return (
    <nav className='navbar flex'>
        <Link href="/">
           <div className="flex gap-2.5">
            <Image 
            src={ logo }
            alt ="logo"
            className='logo-navbar'
            width={40}
            height={40}
            />
           </div>
        </Link>
        <div className='flex items-center gap-8'>
           <NavItems />
           <Link href="/sign-in" className='text-gray-600 hover:text-primary hover:font-bold '>Sign-In</Link>
        </div>
    </nav>
  )
}

export default Navbar
