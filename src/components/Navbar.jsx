"use client"
import Link from 'next/link';
import { useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
import {HiMenuAlt3} from 'react-icons/hi'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-blue-700">
      <div className="w-[80%] mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-xl">
                Logo
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className=" text-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/api/posts" className=" text-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/contact" className=" text-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-700  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <AiOutlineMenu size={20}/>
              ) : (
               <HiMenuAlt3 size={20}/>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className=" text-blue-700 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/about" className=" text-blue-700 block px-3 py-2 rounded-md text-base font-medium">
             About
            </Link>
            <Link href="/contact" className=" text-blue-700 block px-3 py-2 rounded-md text-base font-medium">
            Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
