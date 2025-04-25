'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import UserMenu from '../features/UserMenu'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-gray-200 py-6 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Your Company</span>
              <img
                className="h-10 w-auto"
                src="/logo.svg"
                alt="Company Logo"
              />
            </Link>
            <div className="ml-10 hidden space-x-8 lg:block">
              <Link href="/buy" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Buy
              </Link>
              <Link href="/sell" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Sell
              </Link>
              <Link href="/programs" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Programs
              </Link>
              <Link href="/news" className="text-base font-medium text-gray-500 hover:text-gray-900">
                News
              </Link>
              <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <UserMenu />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary lg:hidden"
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          <Link href="/buy" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Buy
          </Link>
          <Link href="/sell" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Sell
          </Link>
          <Link href="/programs" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Programs
          </Link>
          <Link href="/news" className="text-base font-medium text-gray-500 hover:text-gray-900">
            News
          </Link>
          <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
} 