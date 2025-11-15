'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Sparkles, Zap } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle back to top button visibility
  useEffect(() => {
    const backToTopButton = document.getElementById('back-to-top')
    
    const handleScroll = () => {
      if (window.scrollY > 300) {
        backToTopButton?.classList.remove('opacity-0', 'invisible')
        backToTopButton?.classList.add('opacity-100', 'visible')
      } else {
        backToTopButton?.classList.add('opacity-0', 'invisible')
        backToTopButton?.classList.remove('opacity-100', 'visible')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle back to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Navigation items
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ]

  // Check if current path is active
  const isActive = (href: string) => pathname === href

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
              aria-label="Future Brand - Go to homepage"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-950 to-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl md:text-2xl font-heading font-bold text-primary-950 group-hover:text-secondary-500 transition-colors duration-300">
                Future Brand
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-secondary-500'
                      : 'text-gray-700 hover:text-secondary-500'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary-500 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/contact"
                className="btn-primary flex items-center space-x-2 group"
              >
                <Zap className="w-4 h-4 group-hover:animate-pulse" />
                <span>Get Started</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-secondary-500 hover:bg-gray-100 transition-colors duration-300 focus-ring"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-200/50">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-secondary-500 bg-secondary-50'
                      : 'text-gray-700 hover:text-secondary-500 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Get Started</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Back to top button functionality */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const backToTopButton = document.getElementById('back-to-top');
              if (backToTopButton) {
                backToTopButton.addEventListener('click', function() {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                });
              }
            });
          `,
        }}
      />
    </>
  )
}

