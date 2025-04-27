'use client'

import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
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
                    show={open}
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
            <button className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-primary hover:bg-[#F7F9FB] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 