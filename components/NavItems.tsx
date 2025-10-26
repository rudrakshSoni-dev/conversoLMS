"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Companions', href: '/companions' },
  { name: 'Home', href: '/' },
  { name:'My Journey', href:'my-journey' },
]

function NavItems() {
  const pathName = usePathname();

  return (
    <nav className='flex gap-8'>
      {navItems.map(({name,href}) => (
        <Link href={href} key={name} className={cn(pathName === href ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary font-medium')}>
            {name}
        </Link>
      ))}
    </nav>
  )
}

export default NavItems
