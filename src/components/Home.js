import React from 'react';
import heroImage from '../assets/img.jpg';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white pt-16 md:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-2">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Container - Text Content */}
      <div className="w-full lg:w-1/2 order-2 lg:order-1">
  <div className="w-full bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-xl 
    p-5 sm:p-6 md:p-6 lg:p-8  /* Even smaller padding */
    my-6 lg:my-8 
    min-h-[280px] sm:min-h-16
    max-w-full lg:max-w-md xl:max-w-lg  /* Much narrower on desktop */
    mx-auto lg:mx-0
    lg:ml-8  /* Add some left margin on desktop */
  ">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 lg:mb-3 leading-tight">
      CubeTech Innovations
    </h1>
    
    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-sky-500 mb-3 lg:mb-4 font-medium">
      Shaping Tomorrow's Digital Solutions Today
    </h2>
    
    <div className="mb-4 lg:mb-5">
      <p className="text-sm sm:text-base lg:text-sm xl:text-base text-gray-600 mb-2 lg:mb-3 leading-relaxed">
        CubeTech Innovations is a technology company focused on creating cutting-edge solutions that drive progress and transform ideas into reality. We provide scalable, efficient solutions to help businesses stay ahead in a rapidly evolving digital landscape.
      </p>
      
    </div>
    
    {/* Button Container - even tighter */}
    <div className="flex flex-col sm:flex-row gap-2 lg:gap-3">
      <button className="
        bg-gradient-to-b from-sky-500 to-blue-500 
        hover:from-sky-600 hover:to-blue-600
        text-white font-semibold 
        px-4 lg:px-5 py-2 lg:py-2.5 
        rounded-lg 
        transition-all duration-300 
        text-xs lg:text-sm 
        shadow-md hover:shadow-lg hover:-translate-y-0.5
        w-full sm:w-auto
      ">
        CONTACT US
      </button>
      
      <button className="
        border border-gray-800 
        text-gray-800 hover:bg-gray-50 
        font-semibold 
        px-4 lg:px-5 py-2 lg:py-2.5 
        rounded-lg 
        transition-all duration-300 
        text-xs lg:text-sm 
        w-full sm:w-auto
        hover:-translate-y-0.5
      ">
        READ MORE
      </button>
    </div>
  </div>
</div>
            
            {/* Right Container - Image */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 -mt-32">
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
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md text-center 
  hover:shadow-lg hover:-translate-y-1 
  transition-all duration-300 ease-in-out">
        <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2 sm:mb-3">100+</h3>
        <p className="text-sm sm:text-base text-gray-600">Skilled software experts ready to innovate</p>
      </div>
     <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md text-center 
  hover:shadow-lg hover:-translate-y-1 
  transition-all duration-300 ease-in-out">
        <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2 sm:mb-3">100+</h3>
        <p className="text-sm sm:text-base text-gray-600">Successful projects delivered across multiple industries</p>
      </div>
     <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md text-center 
  hover:shadow-lg hover:-translate-y-1 
  transition-all duration-300 ease-in-out">
        <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2 sm:mb-3">100+</h3>
        <p className="text-sm sm:text-base text-gray-600">Trusted clients gaining value from proven expertise</p>
      </div>
     <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md text-center 
  hover:shadow-lg hover:-translate-y-1 
  transition-all duration-300 ease-in-out">
        <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2 sm:mb-3">under 5%</h3>
        <p className="text-sm sm:text-base text-gray-600">Developer turnover rate consistently upheld</p>
      </div>
    </div>
    
    {/* SnapServe Product - Image on right */}
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
        <button className="bg-gradient-to-b from-sky-500 to-blue-500 hover:from-sky-600 hover:via-blue-600 hover:to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-500 ease-out text-base shadow-lg hover:shadow-2xl w-full sm:w-auto hover:-translate-y-1 transform">
          Request a Demo
        </button>
      </div>
      
      {/* First Image */}
      <div className="w-full lg:w-1/2">
        <img 
          src={require('../assets/stat.jpg')} 
          alt="SnapServe QR Code Menu System"
          className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
    
    {/* Subscription Info - Image on left */}
    <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 mb-12">
      {/* Second Image - appears on left on desktop, top on mobile */}
      <div className="w-full lg:w-1/2 order-2 lg:order-1">
        <img 
          src={require('../assets/qr.jpg')} 
          alt="SnapServe Subscription Service"
          className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-xl shadow-lg"
        />
      </div>
      
      {/* Text content on right */}
      <div className="w-full lg:w-1/2 order-1 lg:order-2">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-md">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
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
          <button className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition duration-300 text-sm sm:text-base flex items-center gap-2">
            More about our products 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Section 3: About CubeTech & Team */}
<section className="bg-gray-300 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
  <div className="mb-12 sm:mb-16">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 text-center mb-8 sm:mb-10">
      We're CubeTech
    </h2>
    
   {/* Gallery + Text Section */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
  {/* Left: 2x2 Image Grid with angled/tilted effect */}
  <div className="lg:col-span-2">
    <div className="grid grid-cols-2 gap-3 sm:gap-4 relative">
      {/* Rotated container for the whole grid */}
      <div className="col-span-2 grid grid-cols-2 gap-3 sm:gap-4 transform -rotate-1">
        {/* Row 1 - Column 1 - Rotated slightly differently */}
        <div className="transform rotate-2 overflow-hidden rounded-lg shadow-md">
          <div className="w-full h-32 sm:h-40 md:h-48">
            <img 
              src={require('../assets/team1.png')}
              alt="CubeTech Team Collaboration"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
        
        {/* Row 1 - Column 2 - Rotated slightly differently */}
        <div className="transform -rotate-1 overflow-hidden rounded-lg shadow-md">
          <div className="w-full h-32 sm:h-40 md:h-48">
            <img 
              src={require('../assets/team2.png')}
              alt="CubeTech Office Space"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
        
        {/* Row 2 - Column 1 - Rotated slightly differently */}
        <div className="transform -rotate-2 overflow-hidden rounded-lg shadow-md">
          <div className="w-full h-32 sm:h-40 md:h-48">
            <img 
              src={require('../assets/qr.jpg')}
              alt="CubeTech Technology"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
        
        {/* Row 2 - Column 2 - Rotated slightly differently */}
        <div className="transform rotate-1 overflow-hidden rounded-lg shadow-md">
          <div className="w-full h-32 sm:h-40 md:h-48">
            <img 
              src={require('../assets/team1.png')}
              alt="CubeTech Projects"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Right: Text Sidebar - Matching exact design from image */}
  <div className="bg-gray-100 p-5 sm:p-6 md:p-7 rounded-lg shadow-sm border border-gray-200">
    <div className="space-y-3 sm:space-y-4">
      <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
        We're a passionate and innovative team based in Cebu, Philippines, dedicated to delivering exceptional products that our customers love and rely on.
      </p>
      
      <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
        At CubeTech, we pride ourselves on our collaborative culture, fostering an environment where creativity thrives and every voice matters.
      </p>
      
      <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
        Together, we strive for excellence in everything we do, ensuring that we exceed expectations and make a positive impact in our community.
      </p>
      
      <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
        CubeTech is all about crafting software solutions that meet client needs and drive growth. We're focused on building secure, user-friendly tools that add value—no hidden costs, just straightforward solutions.
      </p>
      
      <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
        By enhancing productivity, we aim to be a reliable partner our clients can count on for the long haul.
      </p>
    </div>
  </div>
</div>
    
    {/* Mission & Vision Boxes */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
      <div className="bg-transparent p-6 sm:p-8 rounded-xl shadow-sm border border-gray-300">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-3 sm:mb-4">Our Mission</h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          Empower businesses every day by providing innovative software solutions that drive growth and unlock their full potential.
        </p>
      </div>
      <div className="bg-transparent p-6 sm:p-8 rounded-xl shadow-sm border border-gray-300">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-3 sm:mb-4">Our Vision</h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          CubeTech delivers innovative, secure, and user-friendly software tailored to client needs. We focus on transparency, efficiency, and long-term partnerships, empowering growth with reliable solutions that boost productivity.
        </p>
      </div>
    </div>
    
    {/* Team Section with Carousel */}
    <div className="px-4 sm:px-6 lg:px-8">
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
        Our Team
      </h3>
      
      {/* Carousel Container */}
      <div className="relative">
        {/* Carousel Navigation Arrows */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Team Carousel - Always 2 per row on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 overflow-hidden">
          {/* Team Member 1 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
            <div className="w-full h-48 sm:h-52 md:h-64 lg:h-72 xl:h-80">
              <img 
                src={require('../assets/team1.png')} 
                alt="Sadiq Rahman" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-5">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Sadiq Rahman</h4>
              <p className="text-blue-600 font-semibold text-xs sm:text-sm">DIRECTOR</p>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
            <div className="w-full h-48 sm:h-52 md:h-64 lg:h-72 xl:h-80">
              <img 
                src={require('../assets/team2.png')} 
                alt="Cherry White" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-5">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Cherry White</h4>
              <p className="text-blue-600 font-semibold text-xs sm:text-sm">SALES AND MARKETING</p>
            </div>
          </div>
          
          {/* Team Member 3 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
            <div className="w-full h-48 sm:h-52 md:h-64 lg:h-72 xl:h-80">
              <img 
                src={require('../assets/team2.png')} 
                alt="Angeline Yap" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-5">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Angeline Yap</h4>
              <p className="text-blue-600 font-semibold text-xs sm:text-sm">FINANCE MANAGER</p>
            </div>
          </div>
          
          {/* Team Member 4 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
            <div className="w-full h-48 sm:h-52 md:h-64 lg:h-72 xl:h-80">
              <img 
                src={require('../assets/team1.png')} 
                alt="Derver Son" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-5">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Derver Son</h4>
              <p className="text-blue-600 font-semibold text-xs sm:text-sm">FULL-STACK DEVELOPER</p>
            </div>
          </div>
        </div>
        
        {/* Carousel Dots Indicator */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          <button className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-600"></button>
          <button className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white hover:bg-gray-400"></button>
          <button className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white hover:bg-gray-400"></button>
          <button className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white hover:bg-gray-400"></button>
        </div>
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
  {/* Testimonial 1 - Anne Curtis */}
  <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
    <div className="flex items-start gap-4 mb-6 sm:mb-8">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img 
          src={require('../assets/team1.png')}
          alt="Anne Curtis" 
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gray-100"
        />
      </div>
      {/* Quote */}
      <div>
        <p className="text-gray-600 italic leading-relaxed text-sm sm:text-base">
          "Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend."
        </p>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <div>
        <h4 className="font-bold text-gray-900 text-base sm:text-lg">Anne Curtis</h4>
        <p className="text-gray-500 text-sm sm:text-base">CEO @ WASHO WASHO LTD.</p>
      </div>
    </div>
  </div>
  
  {/* Testimonial 2 - Kim Sam Son */}
  <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
    <div className="flex items-start gap-4 mb-6 sm:mb-8">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img 
          src={require('../assets/team2.png')}
          alt="Kim Sam Son" 
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gray-100"
        />
      </div>
      {/* Quote */}
      <div>
        <p className="text-gray-600 italic leading-relaxed text-sm sm:text-base">
          "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails."
        </p>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <div>
        <h4 className="font-bold text-gray-900 text-base sm:text-lg">Kim Sam Son</h4>
        <p className="text-gray-500 text-sm sm:text-base">MARKETING @ WADIRI WADIDITO INC.</p>
      </div>
    </div>
  </div>
  
  {/* Testimonial 3 - Kim Soo-Hyun */}
  <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
    <div className="flex items-start gap-4 mb-6 sm:mb-8">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img 
          src={require('../assets/qr.jpg')}
          alt="Kim Soo-Hyun" 
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gray-100"
        />
      </div>
      {/* Quote */}
      <div>
        <p className="text-gray-600 italic leading-relaxed text-sm sm:text-base">
          "공이 당신을 바라보고, 공이 없는 곳은 모든 가치를 넘겨주다."
        </p>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <div>
        <h4 className="font-bold text-gray-900 text-base sm:text-lg">Kim Soo-Hyun</h4>
        <p className="text-gray-500 text-sm sm:text-base">CFO @ WADIRI WADIDITO INC.</p>
      </div>
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
                className="bg-gradient-to-b from-sky-500 to-blue-500 hover:from-sky-600 hover:via-blue-600 hover:to-indigo-600 text-white font-semibold px-3 py-3 rounded-lg 
  transition-all duration-500 ease-out text-base shadow-lg hover:shadow-2xl
  w-50 sm:w-auto ml-28 hover:-translate-y-1
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
