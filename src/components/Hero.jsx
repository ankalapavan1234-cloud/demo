import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const cardsRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade-up animations
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      );

      gsap.fromTo(subtextRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 }
      );

      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.8 }
      );
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=3840&h=2160&fit=crop&q=80" 
          alt="Student Community" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Subtle animated background elements */}
      <div className="absolute inset-0 -z-5 opacity-30">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center pt-40 pb-24">
        <div className="max-w-6xl mx-auto">
          
          {/* Heading */}
          <h1 
            ref={headingRef}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-tight"
          >
            Welcome to Our Community
          </h1>

          {/* Subtext - Eye-catching design */}
          <div 
            ref={subtextRef}
            className="mb-16 max-w-5xl mx-auto"
          >
            {/* Main tagline with gradient */}
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 mb-8 leading-tight">
              Join a vibrant community of innovators, researchers, and future leaders.
            </p>
            
            {/* Feature highlights in grid */}
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor" aria-hidden>
                    <path d="M12 2L3 7l9 5 9-5-9-5zm0 7.5L6.2 7 12 4.5 17.8 7 12 9.5zM5 9v6c0 3 3 5 7 5s7-2 7-5V9" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-white mb-2">Excellence in Engineering</p>
                <p className="text-sm text-white/70">Fostering innovation and technology</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 text-indigo-500" fill="currentColor" aria-hidden>
                    <path d="M12 2c.6 0 1.2.2 1.7.6l3.6 3.6c.4.4.6 1 .6 1.7 0 .6-.2 1.2-.6 1.7L13 15l-1.4 4.3c-.1.3-.4.5-.7.5-.1 0-.2 0-.3-.1L6.6 19c-.8-.4-1.5-1.1-1.9-1.9L4.1 14c0-.1 0-.2-.1-.3 0-.4.2-.7.5-.8L9 11l5-4.9c.3-.3.6-.5 1-.6.1 0 .1-.1.2-.1z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-white mb-2">Exciting Events</p>
                <p className="text-sm text-white/70">Connect with like-minded peers</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor" aria-hidden>
                    <path d="M9 21h6v-1.5H9V21zm3-19a7 7 0 00-4.9 11.9L9 16h6l2.9-2.1A7 7 0 0012 2z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-white mb-2">Cutting-Edge Projects</p>
                <p className="text-sm text-white/70">Shape the future together</p>
              </div>
            </div>
            
            {/* Bottom tagline */}
            <p className="text-xl sm:text-2xl text-white/80 font-medium italic mb-4">
              "Innovation • Collaboration • Continuous Learning"
            </p>
            
            {/* Additional subtext */}
            <div className="space-y-3 text-center max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl text-white font-medium">
                Empowering students to build the future through hands-on projects and networking
              </p>
              <p className="text-lg sm:text-xl text-white font-medium">
                Join workshops, hackathons, and tech talks led by industry experts
              </p>
              <p className="text-lg sm:text-xl text-white font-medium">
                Be part of a community that transforms ideas into impactful solutions
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div ref={ctaRef} className="mb-16">
            <a
              href="#about"
              className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-xl font-bold rounded-full shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105 transition-all duration-300 group"
            >
              Explore Chapter
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Active Members Card */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur-lg opacity-25"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex flex-col items-center space-y-3">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  {/* Number */}
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                    500+
                  </div>
                  {/* Label */}
                  <div className="text-base font-bold text-white uppercase tracking-wide">
                    Active Members
                  </div>
                </div>
              </div>
            </div>
            {/* Events Card */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-lg opacity-25"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex flex-col items-center space-y-3">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  {/* Number */}
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                    50+
                  </div>
                  {/* Label */}
                  <div className="text-base font-bold text-white uppercase tracking-wide">
                    Events
                  </div>
                </div>
              </div>
            </div>
            {/* Projects Card */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur-lg opacity-25"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex flex-col items-center space-y-3">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  {/* Number */}
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
                    30+
                  </div>
                  {/* Label */}
                  <div className="text-base font-bold text-white uppercase tracking-wide">
                    Projects
                  </div>
                </div>
              </div>
            </div>
            {/* Idea Card */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-xl blur-lg opacity-25"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex flex-col items-center space-y-3">
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 120 120" className="w-14 h-14">
                      <circle cx="60" cy="60" r="35" fill="#e0fdfa" opacity="0.4"></circle>
                      <line x1="60" y1="60" x2="30" y2="20" stroke="#10b981" strokeWidth="2" opacity="0.7"></line>
                      <line x1="60" y1="60" x2="90" y2="25" stroke="#10b981" strokeWidth="1.8" opacity="0.6"></line>
                      <line x1="60" y1="60" x2="100" y2="60" stroke="#14b8a6" strokeWidth="2" opacity="0.7"></line>
                      <line x1="60" y1="60" x2="85" y2="95" stroke="#34d399" strokeWidth="1.5" opacity="0.6"></line>
                      <line x1="60" y1="60" x2="35" y2="100" stroke="#5eead4" strokeWidth="1.8" opacity="0.6"></line>
                      <line x1="60" y1="60" x2="20" y2="70" stroke="#10b981" strokeWidth="1.5" opacity="0.6"></line>
                      <circle cx="30" cy="20" r="4" fill="#10b981" opacity="0.9"></circle>
                      <circle cx="90" cy="25" r="3.5" fill="#14b8a6" opacity="0.8"></circle>
                      <circle cx="100" cy="60" r="4" fill="#34d399" opacity="0.9"></circle>
                      <circle cx="85" cy="95" r="3" fill="#5eead4" opacity="0.8"></circle>
                      <circle cx="35" cy="100" r="3.5" fill="#10b981" opacity="0.9"></circle>
                      <circle cx="20" cy="70" r="3" fill="#14b8a6" opacity="0.8"></circle>
                      <circle cx="60" cy="60" r="20" stroke="#10b981" strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="5,5"></circle>
                      <circle cx="60" cy="60" r="28" stroke="#14b8a6" strokeWidth="0.8" fill="none" opacity="0.3" strokeDasharray="3,6"></circle>
                    </svg>
                  </div>
                  {/* Label */}
                  <div className="text-base font-bold text-white uppercase tracking-wide">
                    Idea
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
