// component/Header.js
"use client"
// components/Navbar.js
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">AYUSHerbs</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/plants" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">Plants</Link>
              <Link href="/identify" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">Identify</Link>
              <Link href="/journey" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">Journey</Link>
              <Link href="/community" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">Community</Link>
              {/* <Link href="/login" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">Login</Link> */}
              <Link href="/AYUSHHealthAdvisor" className="block hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium">HerbGuru</Link>
              
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-200 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/plants" className="block hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium">Plants</Link>
            <Link href="/identify" className="block hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium">Identify</Link>
            <Link href="/journey" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">Journey</Link>
            <Link href="/community" className="block hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium">Community</Link>
            {/* <Link href="/login" className="block hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium">Login</Link> */}
            <Link href="/AYUSHHealthAdvisor" className="block hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium">HerbGuru</Link>
          </div>
        </div>
      )}
    </nav>
  )
}