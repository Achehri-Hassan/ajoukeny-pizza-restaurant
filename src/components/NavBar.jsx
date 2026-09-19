import React from 'react'
import assets from '../assets/assets'

function NavBar() {
  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Menu', href: '#', active: false },
    { name: 'About', href: '#', active: false },
    { name: 'Contact', href: '#', active: false },
  ]

  return (
    <header className=" bg-white sticky top-0 z-50">
      <div className="mx-auto flex items-center justify-between px-6 py-2">
        
        {/* Brand Logo */}
        <a href="#">
          <img src={assets.logo_azoukeny} alt="Azoukeny Logo" className="w-32 md:w-36 object-contain" />
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-semibold mx-5 border-b-2 transition-all duration-300 ease-in-out w-fit ${
                link.active
                  ? 'border-[var(--pimary-color)] text-[var(--pimary-color)]'
                  : 'border-transparent text-[var(--black)] hover:text-[var(--pimary-color)] hover:border-[var(--pimary-color)]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Cart Icon */}
        <div className="relative inline-flex items-center">
          <a
            href="#"
            aria-label="Shopping Cart"
            className="text-2xl text-[var(--black)] hover:opacity-80 transition-opacity"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
          <span className="absolute -top-2 -right-2.5 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
            0
          </span>
        </div>

      </div>
    </header>
  )
}

export default NavBar