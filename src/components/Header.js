import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  const navItems = [
    { 
      name: 'Products', 
      href: '#',
      dropdown: [
        { name: 'Web Solutions', href: '#' },
        { name: 'Mobile Apps', href: '#' },
        { name: 'Cloud Services', href: '#' },
        { name: 'AI Integration', href: '#' },
      ]
    },
    { 
      name: 'Services', 
      href: '#',
      dropdown: [
        { name: 'Consulting', href: '#' },
        { name: 'Development', href: '#' },
        { name: 'Maintenance', href: '#' },
        { name: 'Training', href: '#' },
      ]
    },
    { name: 'About Us', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  // Toggle mobile dropdown
  const toggleMobileDropdown = (itemName) => {
    setMobileDropdownOpen(mobileDropdownOpen === itemName ? null : itemName);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {/* Logo Image */}
            <img src={logo} 
              alt="CubeTech Logo"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-1xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                CubeTech
              </h1>
              <p className="text-1xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">Innovations</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 group"
                    onMouseEnter={() => {
                      if (item.name === 'Products') setIsProductsOpen(true);
                      if (item.name === 'Services') setIsServicesOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (item.name === 'Products') setIsProductsOpen(false);
                      if (item.name === 'Services') setIsServicesOpen(false);
                    }}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  >
                    {item.name}
                  </a>
                )}
                
                {/* Products Dropdown Menu */}
                {item.dropdown && item.name === 'Products' && (
                  <div 
                    className={`absolute top-full left-0 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 transition-all duration-300 ${
                      isProductsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors group"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
                
                {/* Services Dropdown Menu */}
                {item.dropdown && item.name === 'Services' && (
                  <div 
                    className={`absolute top-full left-0 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 transition-all duration-300 ${
                      isServicesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="flex items-center px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors group"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="ml-4">
              <button className="px-6 py-2.5 bg-gradient-to-b from-sky-400 to-sky-500 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:scale-[1.02] transition-all">
                Contact Us
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-100">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg"
                      onClick={() => toggleMobileDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        mobileDropdownOpen === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    <div className={`pl-6 space-y-1 ${
                      mobileDropdownOpen === item.name ? 'block' : 'hidden'
                    }`}>
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <div className="px-4 pt-4 space-y-3 border-t border-gray-100 mt-4">
              <button className="w-full px-4 py-3 bg-gradient-to-b from-sky-400 to-sky-500 text-white rounded-lg font-medium hover:shadow-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;