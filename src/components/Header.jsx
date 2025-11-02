import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

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
            {/* Animated Collaboration Logo Mark */}
            <div className="relative w-12 h-12 flex-shrink-0 overflow-visible">
              {/* VVIT Card - Left */}
              <div className="absolute w-5 h-5 rounded-md bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm
                            transition-all duration-700 ease-in-out
                            left-0 top-1/2 -translate-y-1/2
                            group-hover:left-[14px] group-hover:scale-95 group-hover:opacity-80
                            flex items-center justify-center">
                <span className="text-[8px] font-bold text-white">V</span>
              </div>

              {/* IUCEE Card - Right */}
              <div className="absolute w-5 h-5 rounded-md bg-gradient-to-br from-purple-500 to-purple-600 shadow-sm
                            transition-all duration-700 ease-in-out
                            right-0 top-1/2 -translate-y-1/2
                            group-hover:right-[14px] group-hover:scale-95 group-hover:opacity-80
                            flex items-center justify-center">
                <span className="text-[8px] font-bold text-white">I</span>
              </div>

              {/* VVISC Card - Center (appears on hover) */}
              <div className="absolute w-6 h-6 rounded-lg bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 shadow-lg
                            transition-all duration-700 ease-in-out
                            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                            scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100
                            flex items-center justify-center border border-white/20">
                <span className="text-[9px] font-bold text-white tracking-tight">VS</span>
              </div>

              {/* Collision Effect Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent
                            group-hover:border-blue-400/30 group-hover:scale-150
                            transition-all duration-700 ease-out opacity-0 group-hover:opacity-100"></div>
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
          <button 
            onClick={() => navigate('/join-us')}
            className="group relative px-6 py-2.5 bg-gradient-to-r from-blue-800 to-purple-900 text-white text-sm font-medium rounded-lg overflow-hidden cursor-pointer"
          >
            {/* Button background effect (subtle gradient by default, intensifies on hover) */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
            
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
