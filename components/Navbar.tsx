'use client'
import Image from 'next/image'
import React from 'react'
import { Link, usePathname } from '@/i18n/routing'
import LocaleSwitcher from './LocaleSwitcher'
import { useTranslations } from 'next-intl'

const Navbar = () => {
  const pathname = usePathname()
  const t = useTranslations('nav')

  const navbarItems = [
    {
      name: t('home'),
      href: '/',
    },
    {
      name: t('categories'),
      href: '/categories',
    },
    {
      name: t('contactus'),
      href: '/contactus',
    },
    {
      name: t('about'),
      href: '/about',
    },
  ]
  return (
    <header className='w-full flex flex-col sm:flex-row items-center px-2 md:px-4 lg:px-8'>
      <div className='flex flex-1 items-center gap-x-2 sm:gap-x-8 md:gap-x-20'>
        <Image src={'/logo.png'} alt='logo' width={76} height={56} />
        <nav>
          <ul className='flex items-center gap-x-2 sm:gap-x-4 md:gap-x-8 list-none'>
            {navbarItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm sm:text-base ${
                    pathname == item.href ? 'text-[#49BD88] font-[600]' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <LocaleSwitcher />
    </header>
  )
}

export default Navbar
