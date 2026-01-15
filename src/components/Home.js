import React from 'react';
import heroImage from '../assets/img.jpg';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white pt-16 md:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Container - Text Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="w-full bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-xl p-6 sm:p-8 md:p-10 my-8 lg:my-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  CubeTech Innovations
                </h1>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl text-sky-500 mb-6 font-medium">
                  Shaping Tomorrow's Digital Solutions Today
                </h2>
                
                <div className="mb-8">
                  <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
                    CubeTech Innovations is a technology company focused on creating cutting-edge solutions that drive progress and transform ideas into reality. We provide scalable, efficient solutions to help businesses stay ahead in a rapidly evolving digital landscape.
                  </p>
                </div>
                
                {/* Button Container */}
                <div className="flex flex-col sm:flex-row gap-4">
                 <button className="bg-gradient-to-b from-sky-500 to-blue-500 hover:from-sky-600 hover:via-blue-600 hover:to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg 
  transition-all duration-500 ease-out text-base shadow-lg hover:shadow-2xl
  w-full sm:w-auto hover:-translate-y-1
  transform
">
  CONTACT US
</button>
                  <button className="border border-gray-800 text-gray-800 hover:bg-gray-50 font-semibold px-6 py-3 rounded-lg transition duration-300 text-base w-full sm:w-auto hover:-translate-y-1
  transform">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Container - Image */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <img 
                src={heroImage}
                alt="CubeTech Digital Solutions"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg lg:rounded-bl-[80px]"
              />
            </div>  
          </div>
        </div>
      </section>

      {/* Section 2: Stats & SnapServe Product */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50 rounded-3xl my-8 sm:my-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-20">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2 sm:mb-3">100+</h3>
              <p className="text-sm sm:text-base text-gray-600">Skilled software experts ready to innovate</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2 sm:mb-3">100+</h3>
              <p className="text-sm sm:text-base text-gray-600">Successful projects delivered across multiple industries</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2 sm:mb-3">100+</h3>
              <p className="text-sm sm:text-base text-gray-600">Trusted clients gaining value from proven expertise</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2 sm:mb-3">under 5%</h3>
              <p className="text-sm sm:text-base text-gray-600">Developer turnover rate consistently upheld</p>
            </div>
          </div>
          
          {/* SnapServe Product */}
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Discovering "SnapServe" Taking Your Restaurant Online in Minutes
              </h2>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Eliminate the hassle of reprinting menus, reduce order errors, and speed up kitchen operations. With SnapServe QR code menu, easily integrate a seamless online ordering system into your restaurant, offering faster and more enjoyable dining experience for your customers.
              </p>
              <p className="font-semibold text-gray-800 mb-6 sm:mb-8 text-sm sm:text-base">
                Streamline dining with SnapServe—reduce waste and business.
              </p>
              <button className="bg-gradient-to-b from-sky-500 to-blue-500 hover:from-sky-600 hover:via-blue-600 hover:to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg 
  transition-all duration-500 ease-out text-base shadow-lg hover:shadow-2xl
  w-full sm:w-auto hover:-translate-y-1
  transform">
                Request a Demo
              </button>
            </div>
            
            {/* Product Image Placeholder */}
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-200 h-[300px] sm:h-[400px] rounded-xl flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
              </div>
            </div>
          </div>
          
          {/* Subscription Info */}
          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-xl shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              SnapServe offers a powerful subscription service with a range of options tailored to meet your needs!
            </h3>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <p className="text-gray-600 text-sm sm:text-base">
                Our basic subscription includes one menu and ordering service, allowing you to access essential features at an affordable price. You can utilize the basic plan without any obligation to upgrade, and your QR code will remain active at all times.
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                With our service, you can receive unlimited dine-in, delivery, and takeaway orders under this plan.
              </p>
            </div>
            <button className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition duration-300 text-sm sm:text-base">
              More about our products →
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: About CubeTech & Team */}
      <section className="py-12 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            We're CubeTech
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-10">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Empower businesses every day by providing innovative software solutions that drive growth and unlock their full potential.
              </p>
            </div>
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                CubeTech delivers innovative, secure, and user-friendly software tailored to client needs. We focus on transparency, efficiency, and long-term partnerships, empowering growth with reliable solutions that boost productivity.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Sadik Rahman</h4>
              <p className="text-blue-600 font-semibold text-sm sm:text-base">DIRECTOR</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Cherry White</h4>
              <p className="text-blue-600 font-semibold text-sm sm:text-base">SALES AND MARKETING</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Angeline Yap</h4>
              <p className="text-blue-600 font-semibold text-sm sm:text-base">FINANCE MANAGER</p>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Denver Son</h4>
              <p className="text-blue-600 font-semibold text-sm sm:text-base">FULL-STACK DEVELOPER</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials & Contact */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50 rounded-3xl my-8 sm:my-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Experience it firsthand and discover true value
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              See how our solution delivers real-world benefits, designed to meet your unique needs, enhance efficiency, and exceed your expectations every step of the way.
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
              <div className="mb-6 sm:mb-8">
                <p className="text-gray-600 italic leading-relaxed text-sm sm:text-base">
                  "Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend."
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base sm:text-lg">Anne Curtis</h4>
                <p className="text-gray-500 text-sm sm:text-base">CEO @ WASHO WASHO LTD.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
              <div className="mb-6 sm:mb-8">
                <p className="text-gray-600 italic leading-relaxed text-sm sm:text-base">
                  "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails."
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base sm:text-lg">Kim Sam Son</h4>
                <p className="text-gray-500 text-sm sm:text-base">MARKETING @ WADIRI WADIDITO INC.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
              <div className="mb-6 sm:mb-8">
                <p className="text-gray-600 italic leading-relaxed text-sm sm:text-base">
                  "공이 당신을 바라보고, 공이 없는 곳은 모든 가치를 넘겨주다."
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base sm:text-lg">Kim Soo-Hyun</h4>
                <p className="text-gray-500 text-sm sm:text-base">CFO @ WADIRI WADIDITO INC.</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-xl shadow-md">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              We are here for you
            </h2>
            <p className="text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">For further questions, including partnership opportunities</p>
            
            <form className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="fullName" 
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  What can we help you?
                </label>
                <textarea 
                  id="message" 
                  placeholder="Describe your problem in at least 250 characters" 
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-gradient-to-b from-sky-500 to-blue-500 hover:from-sky-600 hover:via-blue-600 hover:to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg 
  transition-all duration-500 ease-out text-base shadow-lg hover:shadow-2xl
  w-full sm:w-auto hover:-translate-y-1
  transform"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;