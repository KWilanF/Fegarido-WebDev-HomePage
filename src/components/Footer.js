import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Top row with copyright and newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Copyright on left */}
          <div className="text-center md:text-left">
            <p className="text-gray-600">
              <span className="font-semibold">CubeTech Innovations</span> © {currentYear}
            </p>
          </div>
          
          {/* Newsletter on right */}
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Links section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
          {/* Company Column */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-gray-800 mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => console.log('About Us clicked')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => console.log('Privacy Policy clicked')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => console.log('Terms and Conditions clicked')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Terms and Conditions
                </button>
              </li>
            </ul>
          </div>
          
          {/* Products Column */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-gray-800 mb-3">Products</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => console.log('SnapServe clicked')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  SnapServe
                </button>
              </li>
            </ul>
          </div>
          
          {/* Services Column */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-gray-800 mb-3">Services</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => console.log('Barcode Generator clicked')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Barcode Generator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => console.log('QR Code Generator clicked')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  QR Code Generator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => console.log('Job Search clicked')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Job Search
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