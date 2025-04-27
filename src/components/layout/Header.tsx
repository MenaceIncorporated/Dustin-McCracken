'use client'

import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Header() {
  const pathname = usePathname()
  const [isToolsOpen, setIsToolsOpen] = useState(false)
  
  const navigation = [
    { name: 'Properties', href: '/properties' },
    { name: 'Buy', href: '/buy' },
    { name: 'Sell', href: '/sell' },
    { name: 'News', href: '/news' },
    { name: 'Programs', href: '/programs' },
    { name: 'Contact', href: '/contact' },
  ]
  
  // Tools dropdown menu items
  const tools = [
    {
      name: 'Instant Home Value',
      description: 'Get an instant estimate of your home\'s value',
      href: '/instant-home-value',
    },
    {
      name: 'Instant Cash Offer',
      description: 'Get a cash offer for your home in 24 hours',
      href: '/instant-offer',
    },
  ]

  return (
    <header className="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="/">
              <Image src="/exp-logo-black-wide.png" alt="eXp Realty Logo" width={120} height={40} priority />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? 'nav-link-active'
                    : 'nav-link'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Tools Dropdown */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`${
                      ['/instant-offer', '/instant-home-value'].includes(pathname)
                        ? 'nav-link-active'
                        : 'nav-link'
                    } inline-flex items-center`}
                  >
                    Tools
                    <ChevronDownIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } ml-2 h-5 w-5 transition-transform`}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-md transform px-2 sm:px-0 -right-4">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {tools.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-tertiary"
                            >
                              <div className="ml-4">
                                <p className="text-base font-medium text-text">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-text-secondary">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link href="/find-your-home" className="btn-primary">
              Find Your Home
            </Link>
            
            <Link href="/login" className="text-text-secondary hover:text-primary">
              Log In
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-primary hover:bg-background-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="block h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? 'bg-tertiary text-primary'
                    : 'text-text-secondary hover:bg-background-light hover:text-primary'
                } block px-3 py-2 text-base font-medium`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Tools dropdown */}
            <div className="border-t border-gray-200 pt-4">
              <div className="px-4">
                <h3 className="text-primary font-medium">Tools</h3>
              </div>
              <div className="mt-2">
                {tools.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-text-secondary hover:bg-tertiary hover:text-primary"
                  >
                    <span>{item.name}</span>
                    <p className="mt-1 text-sm text-text-light">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="pt-4 px-4 flex flex-col space-y-4">
              <Link href="/find-your-home" className="btn-primary">
                Find Your Home
              </Link>
              
              <Link href="/login" className="btn-outline">
                Log In
              </Link>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </header>
  )
} 