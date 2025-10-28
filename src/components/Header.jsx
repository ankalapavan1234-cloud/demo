import React from 'react';

const Header = () => {

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Left Side */}
          <a
            href="#home"
            className="flex items-center gap-4 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {/* Modern Geometric Logo Mark */}
            <div className="relative w-12 h-12 flex-shrink-0">
              {/* SVG Scalar Graphic Logo (neutral colors only) */}
              <svg viewBox="0 0 48 48" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Geometric Shapes representing VVIT + IUCEE collaboration (neutral colors) */}
                {/* Left Circle - VVIT */}
                <circle cx="16" cy="24" r="13" fill="#e5e7eb" opacity="0.9" />
                {/* Right Circle - IUCEE */}
                <circle cx="32" cy="24" r="13" fill="#d1d5db" opacity="0.9" />
                {/* Center Intersection - Collaboration */}
                <ellipse cx="24" cy="24" rx="6" ry="13" fill="#f3f4f6" opacity="0.95" />
                {/* Inner accent lines for depth */}
                <circle cx="16" cy="24" r="10" fill="none" stroke="#111" strokeWidth="1.5" opacity="0.3" />
                <circle cx="32" cy="24" r="10" fill="none" stroke="#111" strokeWidth="1.5" opacity="0.3" />
                {/* Center highlight */}
                <path d="M 24 14 L 24 34" stroke="#111" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
              </svg>
            </div>

            {/* Brand Text */}
            <div className="hidden md:block">
              <div className="flex items-baseline gap-2">
                <h1 className="text-xl font-semibold text-gray-900 tracking-tight">
                  VVIT Student Chapter
                </h1>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  × IUCEE
                </span>
              </div>
              <p className="text-sm text-gray-600 font-normal mt-0.5">
                Engineering Innovation Hub
              </p>
            </div>

            {/* Mobile - Compact version */}
            <div className="md:hidden">
              <h1 className="text-lg font-semibold text-gray-900">VVIT SC</h1>
              <p className="text-xs text-gray-600">Innovation Hub</p>
            </div>
          </a>

          {/* Right Side - CTA Button */}
          <button className="group relative px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg overflow-hidden">
            {/* Button background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Button text */}
            <span className="relative flex items-center gap-2">
              Join Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Subtle bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className="h-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>
    </header>
  );
};

export default Header;
