import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t bg-gray-300">
      <div className="container mx-auto px-4 lg:px-20 xl:px-32">
        {/* Top row with copyright and newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Copyright on left */}
          <div className="text-center md:text-left">
            <p className="text-gray-600">
              <span className="font-semibold">CubeTech Innovations</span> © {currentYear}
            </p>
          </div>
          
          {/* Newsletter on right */}
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm w-full sm:w-48"
            />
            <button 
              className="bg-gradient-to-b from-sky-500 to-blue-500 hover:from-sky-600 hover:via-blue-600 hover:to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg 
  transition-all duration-500 ease-out text-base shadow-lg hover:shadow-2xl
  w-full sm:w-auto hover:-translate-y-1
  transformo"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Links section - 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:flex md:flex-row md:justify-center md:gap-12 lg:gap-16 xl:gap-20">
          
          {/* Mobile: Column 1 (Company + Services) */}
          <div className="grid grid-cols-2 gap-8 md:hidden">
            {/* Company Section */}
            <div className="text-left">
              <h3 className="font-bold text-gray-800 mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => console.log('About Us clicked')}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-left w-full"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => console.log('Privacy Policy clicked')}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-left w-full"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => console.log('Terms and Conditions clicked')}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-left w-full"
                  >
                    Terms and Conditions
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Services Section */}
            <div className="text-left">
              <h3 className="font-bold text-gray-800 mb-3">Services</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => console.log('Barcode Generator clicked')}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-left w-full"
                  >
                    Barcode Generator
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => console.log('QR Code Generator clicked')}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-left w-full"
                  >
                    QR Code Generator
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => console.log('Job Search clicked')}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-left w-full"
                  >
                    Job Search
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Desktop: Company Column */}
          <div className="hidden md:block text-left">
            <h3 className="font-bold text-gray-800 mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => console.log('About Us clicked')}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-left w-full"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => console.log('Privacy Policy clicked')}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-left w-full"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => console.log('Terms and Conditions clicked')}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-left w-full"
                >
                  Terms and Conditions
                </button>
              </li>
            </ul>
          </div>
          
          {/* Desktop: Services Column */}
          <div className="hidden md:block text-left">
            <h3 className="font-bold text-gray-800 mb-3">Services</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => console.log('Barcode Generator clicked')}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-left w-full"
                >
                  Barcode Generator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => console.log('QR Code Generator clicked')}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-left w-full"
                >
                  QR Code Generator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => console.log('Job Search clicked')}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-left w-full"
                >
                  Job Search
                </button>
              </li>
            </ul>
          </div>
          
          {/* Products Column (visible on both mobile and desktop) */}
          <div className="text-left md:mt-0">
            <h3 className="font-bold text-gray-800 mb-3 mt-5">Products</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => console.log('SnapServe clicked')}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-left w-full"
                >
                  SnapServe
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;