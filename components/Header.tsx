'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaBriefcase, FaGraduationCap, FaFileAlt, FaEnvelope } from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home', icon: FaHome },
    { href: '/aboutus', label: 'About Us', icon: FaInfoCircle },
    { href: '/work-with-us', label: 'Work with Us', icon: FaBriefcase },
    { href: '/teacher-training', label: 'Teacher Training', icon: FaGraduationCap },
    { href: '/forms', label: 'Forms', icon: FaFileAlt },
    { href: '/contact', label: 'Contact', icon: FaEnvelope },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative w-24 h-24 transform group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="Vanguard Kids Logo"
                width={96}
                height={96}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-blue-800">Vanguard Kids</h1>
              <p className="text-base text-gray-600">Preschool & Academy</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-5 py-3 rounded-lg flex items-center space-x-2 transition-all duration-200 text-base ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <Icon className="text-base" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-blue-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fadeInUp">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg flex items-center space-x-3 transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    <Icon />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

