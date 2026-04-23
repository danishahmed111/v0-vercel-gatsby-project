"use client"

import { useState } from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            {siteTitle}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              activeClassName="text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              activeClassName="text-blue-600"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              activeClassName="text-blue-600"
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              activeClassName="text-blue-600"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              activeClassName="text-blue-600"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link to="/projects" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link to="/blog" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
