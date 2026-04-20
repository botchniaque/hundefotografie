"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-amber-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-serif font-bold text-amber-900">
            Anna Bochniak
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-amber-800 hover:text-amber-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`${isOpen ? "block" : "hidden"} md:flex gap-8 absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent border-b md:border-0 md:gap-8 p-4 md:p-0`}>
            <Link href="/gallery" className="block md:inline text-amber-800 hover:text-amber-900 font-medium text-sm">
              Gallery
            </Link>
            <Link href="/#offers" className="block md:inline text-amber-800 hover:text-amber-900 font-medium text-sm">
              Offers
            </Link>
            <Link href="/#about" className="block md:inline text-amber-800 hover:text-amber-900 font-medium text-sm">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
