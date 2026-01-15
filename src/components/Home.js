import React from 'react';
import heroImage from '../assets/img.jpg';



const Home = () => {
  return (
    <div className="min-h-screen bg-white">
  <section className="min-h-screen flex items-start bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row items-start justify-between">
    
    {/* Left Container - All text content */}
    <div className="lg:w-1/2 flex flex-col justify-center">
  {/* Container for all text content */}
  <div className="max-w-lg  p-8 mt-50 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm">
    <h1 className="text-2xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
      CubeTech Innovations
    </h1>
    
    <h2 className="text-xl lg:text-1xl text-sky-500 mb-6 font-medium">
      Shaping Tomorrow's Digital Solutions Today
    </h2>
    
    <div className="mb-8">
      <p className="text-base lg:text-lg text-gray-600 mb-4 leading-relaxed">
        CubeTech Innovations is a technology company focused on creating cutting-edge solutions that drive progress and transform ideas into reality.
      </p>
      <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
        We provide scalable, efficient solutions to help businesses stay ahead in a rapidly evolving digital landscape.
      </p>
    </div>
    
    {/* Button Container - matches screenshot spacing */}
    <div className="flex flex-col sm:flex-row gap-4">
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 text-base shadow-md hover:shadow-lg">
        CONTACT US
      </button>
      <button className="border border-gray-800 text-gray-800 hover:bg-gray-50 font-semibold px-6 py-3 rounded-lg transition duration-300 text-base">
        READ MORE
      </button>
    </div>
  </div>
</div>
    
    {/* Right Container - Image only */}
    <div className="lg:w-1/2">
      <img 
        src={heroImage}
        alt="CubeTech Digital Solutions"
        className="w-full h-[500px] lg:h-[600px] object-cover rounded-bl-[40px] lg:rounded-bl-[80px]"
      />
    </div>  
  </div>
</section>

      {/* Section 2: Stats & SnapServe Product */}
      <section className="py-16 md:py-24 bg-gray-50 rounded-3xl my-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-3">100+</h3>
              <p className="text-gray-600">Skilled software experts ready to innovate</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-3">100+</h3>
              <p className="text-gray-600">Successful projects delivered across multiple industries</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-3">100+</h3>
              <p className="text-gray-600">Trusted clients gaining value from proven expertise</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-3">under 5%</h3>
              <p className="text-gray-600">Developer turnover rate consistently upheld</p>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Discovering "SnapServe" Taking Your Restaurant Online in Minutes
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Eliminate the hassle of reprinting menus, reduce order errors, and speed up kitchen operations. With SnapServe QR code menu, easily integrate a seamless online ordering system into your restaurant, offering faster and more enjoyable dining experience for your customers.
              </p>
              <p className="font-semibold text-gray-800 mb-8">
                Streamline dining with SnapServe—reduce waste and business.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
                Request a Demo
              </button>
            </div>
            
            {/* Product Image */}
            <div className="lg:w-1/2">
              
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              SnapServe offers a powerful subscription service with a range of options tailored to meet your needs!
            </h3>
            <div className="space-y-4 mb-8">
              <p className="text-gray-600">
                Our basic subscription includes one menu and ordering service, allowing you to access essential features at an affordable price. You can utilize the basic plan without any obligation to upgrade, and your QR code will remain active at all times.
              </p>
              <p className="text-gray-600">
                With our service, you can receive unlimited dine-in, delivery, and takeaway orders under this plan.
              </p>
            </div>
            <button className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition duration-300">
              More about our products →
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: About CubeTech & Team */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            We're CubeTech
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Empower businesses every day by providing innovative software solutions that drive growth and unlock their full potential.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                CubeTech delivers innovative, secure, and user-friendly software tailored to client needs. We focus on transparency, efficiency, and long-term partnerships, empowering growth with reliable solutions that boost productivity.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
             
              <h4 className="text-xl font-bold text-gray-900 mb-2">Sadik Rahman</h4>
              <p className="text-blue-600 font-semibold">DIRECTOR</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
              
              <h4 className="text-xl font-bold text-gray-900 mb-2">Cherry White</h4>
              <p className="text-blue-600 font-semibold">SALES AND MARKETING</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
              
              <h4 className="text-xl font-bold text-gray-900 mb-2">Angeline Yap</h4>
              <p className="text-blue-600 font-semibold">FINANCE MANAGER</p>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
              
              <h4 className="text-xl font-bold text-gray-900 mb-2">Denver Son</h4>
              <p className="text-blue-600 font-semibold">FULL-STACK DEVELOPER</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials & Contact */}
      <section className="py-16 md:py-24 bg-gray-50 rounded-3xl my-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience it firsthand and discover true value
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our solution delivers real-world benefits, designed to meet your unique needs, enhance efficiency, and exceed your expectations every step of the way.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="mb-8">
                <p className="text-gray-600 italic leading-relaxed">
                  "Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend."
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Anne Curtis</h4>
                <p className="text-gray-500">CEO @ WASHO WASHO LTD.</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="mb-8">
                <p className="text-gray-600 italic leading-relaxed">
                  "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails."
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Kim Sam Son</h4>
                <p className="text-gray-500">MARKETING @ WADIRI WADIDITO INC.</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="mb-8">
                <p className="text-gray-600 italic leading-relaxed">
                  "공이 당신을 바라보고, 공이 없는 곳은 모든 가치를 넘겨주다."
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Kim Soo-Hyun</h4>
                <p className="text-gray-500">CFO @ WADIRI WADIDITO INC.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We are here for you
            </h2>
            <p className="text-gray-600 mb-10">For further questions, including partnership opportunities</p>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="fullName" 
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  What can we help you?
                </label>
                <textarea 
                  id="message" 
                  placeholder="Describe your problem in at least 250 characters" 
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
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