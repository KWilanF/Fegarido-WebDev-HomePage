import React from 'react';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              CubeTech Innovations
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Shaping Touchscreen Digital Solutions Today
            </p>
            <p className="text-lg text-gray-600 mb-10">
              CubeTech Innovations is a technology company focused on creating cutting-edge solutions that are user-friendly and intuitive. We offer a wide range of products, including touchscreens, digital signage solutions, and interactive displays. Our mission is to provide innovative solutions that enhance the way people interact with their devices.
            </p>
            <button
              onClick={() => console.log('Learn More clicked')}
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-700">Global customers across multiple industries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-700">Successful projects delivered across various industries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-700">Threat-driven pricing driven from constant innovation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">under 5%</div>
              <p className="text-gray-700">Disruptive revenue mix with minimal upfront costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Disintermediating "Staggered" Talking Their Preferred Order to Millions
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At CubeTech, we believe in empowering our customers to take control of their digital presence. That's why we've developed a unique approach to managing digital signage. Our patented system allows you to order your screens in any quantity, at any time, and have them installed exactly when you need them.
              </p>
              <button
                onClick={() => console.log('Learn More clicked')}
                className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">We're CubeTech</h3>
                <p className="text-gray-700 mb-6">
                  We are a team of passionate professionals who are committed to delivering exceptional customer service. Our goal is to exceed expectations and deliver the best possible experience for our clients.
                </p>
                <p className="text-gray-700 mb-8">
                  Whether you're looking to install a new screen or upgrade an existing one, we're here to help. Our team of experts is dedicated to providing the highest quality service and ensuring that your project is completed on time and within budget.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Our Mission</h4>
                    <p className="text-gray-700">To create innovative solutions that enhance the way people interact with their devices.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Our Vision</h4>
                    <p className="text-gray-700">To be a leader in the industry, offering innovative solutions that set new standards for customer satisfaction.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Our Values</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li><span className="font-semibold">Integrity:</span> We are honest and transparent in all our dealings.</li>
                      <li><span className="font-semibold">Innovation:</span> We are always looking for new ways to improve our products and services.</li>
                      <li><span className="font-semibold">Customer Focus:</span> We put our customers first and strive to exceed their expectations.</li>
                      <li><span className="font-semibold">Teamwork:</span> We work together as a team to achieve our goals.</li>
                      <li><span className="font-semibold">Excellence:</span> We strive for excellence in everything we do.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Experience & Standard and document true value
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Get the full picture of what you can expect from us by reading our testimonials and reviews. You'll see why we're trusted by millions of satisfied customers around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-gray-700 italic mb-6">
                "I was blown away by the quality of the work I received. The team was professional and responsive, and they went above and beyond to ensure my project was a success."
              </div>
              <div>
                <div className="font-bold text-gray-900">Aimee Cox</div>
                <div className="text-gray-600">Client Success Manager</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-gray-700 italic mb-6">
                "The support team was incredibly helpful and knowledgeable. They were able to quickly diagnose and fix any issues that arose during the installation process."
              </div>
              <div>
                <div className="font-bold text-gray-900">Kim Sam Son</div>
                <div className="text-gray-600">Technical Support Engineer</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-gray-700 italic mb-6">
                "Working with CubeTech was a breeze. The team was friendly and easy to communicate with. I highly recommend their services!"
              </div>
              <div>
                <div className="font-bold text-gray-900">Sara Saei</div>
                <div className="text-gray-600">Project Manager</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">We are here for you</h3>
            <p className="text-gray-700 mb-6">
              For more information, please contact us.
            </p>
            <button
              onClick={() => console.log('Contact Us clicked')}
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;