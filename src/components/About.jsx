import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageFrameRef = useRef(null);
  const contentRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image frame animation - fade in from left
      gsap.fromTo(imageFrameRef.current,
        {
          opacity: 0,
          x: -100,
        },
        {
          scrollTrigger: {
            trigger: imageFrameRef.current,
            start: 'top 80%',
          },
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
        }
      );

      // Heading animation - slide from left
      gsap.fromTo(headingRef.current,
        {
          opacity: 0,
          x: 100,
        },
        {
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
        }
      );

      // Description animation - slide from left with delay
      gsap.fromTo(descriptionRef.current,
        {
          opacity: 0,
          x: 100,
        },
        {
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 80%',
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10"></div>
      <div
        className="absolute inset-0 opacity-5 -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Frame - Images */}
          <div ref={imageFrameRef} className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Innovation - Person coding at computer */}
              <div className="glass-effect rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 aspect-square flex items-center justify-center bg-white/80">
                <div className="text-center p-4">
                  <div className="w-40 h-40 mx-auto mb-2 relative">
                    <svg viewBox="0 0 120 120" className="w-full h-full">
                      <defs>
                        <linearGradient id="innovationGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                        <linearGradient id="innovationGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#d946ef" />
                        </linearGradient>
                      </defs>
                      {/* Desk */}
                      <rect x="20" y="75" width="80" height="8" rx="2" fill="#94a3b8" opacity="0.7" />
                      <rect x="22" y="83" width="4" height="25" fill="#64748b" opacity="0.6" />
                      <rect x="94" y="83" width="4" height="25" fill="#64748b" opacity="0.6" />
                      {/* Computer monitor */}
                      <rect x="35" y="45" width="50" height="35" rx="2" fill="url(#innovationGrad1)" />
                      <rect x="38" y="48" width="44" height="28" rx="1" fill="#1e293b" />
                      {/* Code on screen */}
                      <line x1="42" y1="52" x2="58" y2="52" stroke="#10b981" strokeWidth="1.5" />
                      <line x1="42" y1="56" x2="52" y2="56" stroke="#fbbf24" strokeWidth="1.5" />
                      <line x1="45" y1="60" x2="70" y2="60" stroke="#3b82f6" strokeWidth="1.5" />
                      <line x1="42" y1="64" x2="65" y2="64" stroke="#8b5cf6" strokeWidth="1.5" />
                      <line x1="45" y1="68" x2="55" y2="68" stroke="#ec4899" strokeWidth="1.5" />
                      {/* Monitor stand */}
                      <rect x="57" y="80" width="6" height="8" fill="url(#innovationGrad2)" />
                      <rect x="50" y="88" width="20" height="3" rx="1" fill="url(#innovationGrad2)" />
                      {/* Person head */}
                      <circle cx="60" cy="25" r="8" fill="#fbbf24" />
                      {/* Person hair */}
                      <path d="M 52 25 Q 52 18 60 18 Q 68 18 68 25" fill="#1e293b" />
                      {/* Person body */}
                      <path d="M 60 33 L 50 50 L 50 65 L 54 65 L 54 75 L 66 75 L 66 65 L 70 65 L 70 50 Z" fill="url(#innovationGrad2)" />
                      {/* Arms typing */}
                      <path d="M 50 50 L 40 55 L 38 60" stroke="url(#innovationGrad2)" strokeWidth="3" fill="none" strokeLinecap="round" />
                      <path d="M 70 50 L 80 55 L 82 60" stroke="url(#innovationGrad2)" strokeWidth="3" fill="none" strokeLinecap="round" />
                      {/* Keyboard */}
                      <rect x="30" y="90" width="60" height="8" rx="2" fill="#475569" opacity="0.8" />
                      <circle cx="35" cy="94" r="1" fill="#94a3b8" />
                      <circle cx="40" cy="94" r="1" fill="#94a3b8" />
                      <circle cx="45" cy="94" r="1" fill="#94a3b8" />
                      <circle cx="50" cy="94" r="1" fill="#94a3b8" />
                      <circle cx="55" cy="94" r="1" fill="#94a3b8" />
                      <circle cx="60" cy="94" r="1" fill="#94a3b8" />
                      {/* Coffee cup */}
                      <ellipse cx="15" cy="85" rx="4" ry="3" fill="#78350f" />
                      <rect x="11" y="75" width="8" height="10" rx="1" fill="#92400e" />
                      <path d="M 19 78 Q 23 78 23 81 Q 23 84 19 84" stroke="#78350f" strokeWidth="1.5" fill="none" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700 font-bold">Innovation</p>
                </div>
              </div>

              {/* Collaboration - Team meeting */}
              <div className="glass-effect rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 aspect-square flex items-center justify-center bg-white/80 mt-8">
                <div className="text-center p-4">
                  <div className="w-40 h-40 mx-auto mb-2 relative">
                    <svg viewBox="0 0 120 120" className="w-full h-full">
                      <defs>
                        <linearGradient id="collabGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                        <linearGradient id="collabGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#d946ef" />
                          <stop offset="100%" stopColor="#f472b6" />
                        </linearGradient>
                      </defs>
                      {/* Meeting table */}
                      <ellipse cx="60" cy="75" rx="45" ry="15" fill="#94a3b8" opacity="0.7" />
                      {/* Laptop on table */}
                      <rect x="50" y="65" width="20" height="12" rx="1" fill="#475569" />
                      <rect x="52" y="67" width="16" height="8" fill="#1e293b" />
                      <line x1="55" y1="70" x2="63" y2="70" stroke="#10b981" strokeWidth="0.8" />
                      <line x1="55" y1="72" x2="65" y2="72" stroke="#3b82f6" strokeWidth="0.8" />
                      {/* Documents */}
                      <rect x="30" y="70" width="12" height="8" rx="1" fill="#fff" opacity="0.9" />
                      <line x1="32" y1="73" x2="40" y2="73" stroke="#6366f1" strokeWidth="0.5" />
                      <line x1="32" y1="75" x2="40" y2="75" stroke="#6366f1" strokeWidth="0.5" />
                      {/* Person 1 (left) */}
                      <circle cx="30" cy="45" r="7" fill="#fbbf24" />
                      <path d="M 23 45 Q 23 40 30 40 Q 37 40 37 45" fill="#1e293b" />
                      <path d="M 30 52 L 22 65 L 20 75 L 25 75 L 27 65 L 33 65 L 35 75 L 40 75 L 38 65 Z" fill="url(#collabGrad1)" />
                      {/* Person 2 (center) */}
                      <circle cx="60" cy="35" r="8" fill="#fcd34d" />
                      <path d="M 52 35 Q 52 29 60 29 Q 68 29 68 35" fill="#1e293b" />
                      <path d="M 60 43 L 50 58 L 48 68 L 54 68 L 56 58 L 64 58 L 66 68 L 72 68 L 70 58 Z" fill="url(#collabGrad2)" />
                      {/* Person 3 (right) */}
                      <circle cx="90" cy="45" r="7" fill="#fb923c" />
                      <path d="M 83 45 Q 83 40 90 40 Q 97 40 97 45" fill="#1e293b" />
                      <path d="M 90 52 L 82 65 L 80 75 L 85 75 L 87 65 L 93 65 L 95 75 L 100 75 L 98 65 Z" fill="url(#collabGrad1)" />
                      {/* Thought bubbles / ideas */}
                      <circle cx="20" cy="30" r="3" fill="#fbbf24" opacity="0.6" />
                      <circle cx="17" cy="25" r="2" fill="#fbbf24" opacity="0.4" />
                      <circle cx="100" cy="30" r="3" fill="#fbbf24" opacity="0.6" />
                      <circle cx="103" cy="25" r="2" fill="#fbbf24" opacity="0.4" />
                      {/* Connection lines showing collaboration */}
                      <path d="M 35 50 Q 45 45 55 40" stroke="url(#collabGrad1)" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.5" />
                      <path d="M 65 40 Q 75 45 85 50" stroke="url(#collabGrad1)" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.5" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700 font-bold">Collaboration</p>
                </div>
              </div>

              {/* Education - Person learning at computer */}
              <div className="glass-effect rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 aspect-square flex items-center justify-center bg-white/80">
                <div className="text-center p-4">
                  <div className="w-40 h-40 mx-auto mb-2 relative">
                    <svg viewBox="0 0 120 120" className="w-full h-full">
                      <defs>
                        <linearGradient id="eduGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#ef4444" />
                        </linearGradient>
                        <linearGradient id="eduGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fb923c" />
                          <stop offset="100%" stopColor="#f87171" />
                        </linearGradient>
                      </defs>
                      {/* Desk */}
                      <rect x="15" y="75" width="90" height="8" rx="2" fill="#94a3b8" opacity="0.7" />
                      <rect x="17" y="83" width="4" height="25" fill="#64748b" opacity="0.6" />
                      <rect x="99" y="83" width="4" height="25" fill="#64748b" opacity="0.6" />
                      {/* Computer monitor with educational content */}
                      <rect x="40" y="45" width="55" height="38" rx="2" fill="url(#eduGrad1)" />
                      <rect x="43" y="48" width="49" height="30" rx="1" fill="#1e293b" />
                      {/* Educational content on screen */}
                      <circle cx="55" cy="58" r="3" fill="#10b981" />
                      <line x1="60" y1="58" x2="85" y2="58" stroke="#10b981" strokeWidth="1.2" />
                      <circle cx="55" cy="64" r="3" fill="#3b82f6" />
                      <line x1="60" y1="64" x2="85" y2="64" stroke="#3b82f6" strokeWidth="1.2" />
                      <circle cx="55" cy="70" r="3" fill="#fbbf24" />
                      <line x1="60" y1="70" x2="85" y2="70" stroke="#fbbf24" strokeWidth="1.2" />
                      {/* Play button on screen */}
                      <path d="M 68 60 L 68 68 L 75 64 Z" fill="#fff" opacity="0.8" />
                      {/* Monitor stand */}
                      <rect x="65" y="83" width="5" height="8" fill="url(#eduGrad2)" />
                      <rect x="58" y="91" width="19" height="3" rx="1" fill="url(#eduGrad2)" />
                      {/* Person */}
                      <circle cx="25" cy="50" r="8" fill="#fcd34d" />
                      <path d="M 17 50 Q 17 44 25 44 Q 33 44 33 50" fill="#1e293b" />
                      {/* Person body */}
                      <path d="M 25 58 L 15 72 L 13 82 L 18 82 L 20 72 L 26 72 L 28 82 L 33 82 L 31 72 Z" fill="url(#eduGrad2)" />
                      {/* Arm pointing/gesturing */}
                      <path d="M 31 72 L 38 68 L 42 65" stroke="url(#eduGrad2)" strokeWidth="3" fill="none" strokeLinecap="round" />
                      {/* Books stack */}
                      <rect x="15" y="90" width="18" height="4" rx="1" fill="#ef4444" />
                      <rect x="16" y="86" width="18" height="4" rx="1" fill="#f97316" />
                      <rect x="17" y="82" width="18" height="4" rx="1" fill="#fb923c" />
                      {/* Graduation cap on person */}
                      <path d="M 25 42 L 32 45 L 25 48 L 18 45 Z" fill="#1e293b" />
                      <line x1="32" y1="45" x2="34" y2="50" stroke="#fbbf24" strokeWidth="1" />
                      <circle cx="34" cy="50" r="1" fill="#fbbf24" />
                      {/* Notebook */}
                      <rect x="8" y="72" width="10" height="13" rx="1" fill="#fff" opacity="0.9" />
                      <line x1="10" y1="75" x2="16" y2="75" stroke="#f97316" strokeWidth="0.5" />
                      <line x1="10" y1="78" x2="16" y2="78" stroke="#f97316" strokeWidth="0.5" />
                      <line x1="10" y1="81" x2="16" y2="81" stroke="#f97316" strokeWidth="0.5" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700 font-bold">Education</p>
                </div>
              </div>

              {/* Idea - Brainstorming at computer */}
              <div className="glass-effect rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 aspect-square flex items-center justify-center bg-white/80">
                <div className="text-center p-4">
                  <div className="w-40 h-40 mx-auto mb-2 relative">
                    <svg viewBox="0 0 120 120" className="w-full h-full">
                      <defs>
                        <linearGradient id="ideaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#14b8a6" />
                        </linearGradient>
                        <linearGradient id="ideaGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#34d399" />
                          <stop offset="100%" stopColor="#5eead4" />
                        </linearGradient>
                        <radialGradient id="glowGrad2">
                          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      {/* Desk */}
                      <rect x="20" y="75" width="80" height="8" rx="2" fill="#94a3b8" opacity="0.7" />
                      <rect x="22" y="83" width="4" height="25" fill="#64748b" opacity="0.6" />
                      <rect x="94" y="83" width="4" height="25" fill="#64748b" opacity="0.6" />
                      {/* Computer monitor */}
                      <rect x="45" y="50" width="45" height="30" rx="2" fill="url(#ideaGrad1)" />
                      <rect x="48" y="53" width="39" height="23" rx="1" fill="#1e293b" />
                      {/* Creative design on screen */}
                      <circle cx="58" cy="62" r="4" fill="#fbbf24" />
                      <path d="M 58 58 L 62 62 L 58 66 L 54 62 Z" stroke="#fbbf24" strokeWidth="1.5" fill="none" />
                      <circle cx="70" cy="62" r="3" fill="#3b82f6" />
                      <circle cx="78" cy="62" r="3" fill="#ec4899" />
                      <path d="M 58 68 Q 68 70 78 68" stroke="#10b981" strokeWidth="1.5" fill="none" />
                      {/* Monitor stand */}
                      <rect x="65" y="80" width="5" height="8" fill="url(#ideaGrad2)" />
                      <rect x="58" y="88" width="19" height="3" rx="1" fill="url(#ideaGrad2)" />
                      {/* Person thinking */}
                      <circle cx="25" cy="45" r="8" fill="#fcd34d" />
                      <path d="M 17 45 Q 17 39 25 39 Q 33 39 33 45" fill="#1e293b" />
                      {/* Person body */}
                      <path d="M 25 53 L 15 68 L 13 78 L 18 78 L 20 68 L 26 68 L 28 78 L 33 78 L 31 68 Z" fill="url(#ideaGrad2)" />
                      {/* Arm on chin (thinking pose) */}
                      <path d="M 15 68 L 20 60 L 22 52" stroke="url(#ideaGrad2)" strokeWidth="3" fill="none" strokeLinecap="round" />
                      {/* Large light bulb above head (idea!) */}
                      <circle cx="25" cy="20" r="15" fill="url(#glowGrad2)" />
                      <path d="M 25 12 Q 20 12 18 18 Q 18 24 22 28 L 28 28 Q 32 24 32 18 Q 30 12 25 12 Z" fill="#fbbf24" opacity="0.9" />
                      <rect x="22" y="28" width="6" height="2" fill="#fb923c" />
                      <rect x="22" y="30" width="6" height="2" fill="#fb923c" />
                      {/* Filament in bulb */}
                      <path d="M 23 18 Q 25 21 27 18" stroke="#fff" strokeWidth="1" fill="none" />
                      {/* Sparkles around bulb */}
                      <path d="M 12 15 L 14 17 L 12 19 L 10 17 Z" fill="#fbbf24" />
                      <path d="M 38 15 L 40 17 L 38 19 L 36 17 Z" fill="#fbbf24" />
                      <path d="M 25 5 L 27 7 L 25 9 L 23 7 Z" fill="#fbbf24" />
                      {/* Notepad with sketches */}
                      <rect x="8" y="80" width="12" height="15" rx="1" fill="#fff" opacity="0.9" />
                      <circle cx="11" cy="84" r="1.5" fill="#10b981" />
                      <circle cx="17" cy="84" r="1.5" fill="#3b82f6" />
                      <line x1="10" y1="88" x2="18" y2="88" stroke="#64748b" strokeWidth="0.5" />
                      <line x1="10" y1="91" x2="18" y2="91" stroke="#64748b" strokeWidth="0.5" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700 font-bold">Idea</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Frame - Content */}
          <div ref={contentRef} className="space-y-8">
            {/* Heading with Gradient */}
            <h2 
              ref={headingRef}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              About <span className="gradient-text">Our Chapter</span>
            </h2>

            {/* Description */}
            <div ref={descriptionRef} className="space-y-6">
              <p className="text-lg sm:text-xl text-gray-900 leading-relaxed font-medium">
                We are a dynamic community of engineering students and faculty members dedicated to pushing the boundaries of technology and innovation.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to bridge the gap between academic learning and practical application, fostering an environment where ideas meet implementation and dreams become reality.
              </p>

              {/* Feature List */}
              <div className="space-y-4 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Innovation First</h3>
                    <p className="text-gray-600">Foster creative ideas and transform them into groundbreaking projects</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Collaborative Learning</h3>
                    <p className="text-gray-600">Join workshops and hackathons led by industry experts</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Research & Development</h3>
                    <p className="text-gray-600">Access cutting-edge labs and collaborate on real-world projects</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Industry Connect</h3>
                    <p className="text-gray-600">Network with leading tech companies and secure internships</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-10">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/50">
                  <span className="relative z-10">Enter our Chapter</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
